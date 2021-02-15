import type { MutationRecord } from './mutation-record';
import type { Node } from './node';

export interface MutationObserver extends MutationObserver.Interface {}

/**
 * @exposed Window
 */
export namespace MutationObserver {
	export interface Init {
		childList?: boolean;
		attributes?: boolean;
		characterData?: boolean;
		subtree?: boolean;
		attributeOldValue?: boolean;
		characterDataOldValue?: boolean;
		attributeFilter?: readonly string[];
	}

	export namespace Init {
		export type Constrained = Init &
			// The options object must set at least one of 'attributes', 'characterData', or 'childList' to true.
			({ childList: true } | { attributes: true } | { characterData: true }) &
			// The options object may only set 'attributeOldValue' to true when 'attributes' is true or not present.
			({ attributes?: true; attributeOldValue?: true } | { attributes?: false; attributeOldValue?: false }) &
			// The options object may only set 'attributeFilter' when 'attributes' is true or not present.
			({ attributes?: true; attributeFilter: readonly string[] } | { attributes?: false; attributeFilter?: undefined }) &
			// The options object may only set 'characterDataOldValue' to true when 'characterData' is true or not present.
			({ characterData?: true; characterDataOldValue?: true } | { characterData?: false; characterDataOldValue?: false });
	}

	export type MutationCallback = (mutations: MutationRecord.Constrained[], observer: MutationObserver) => void;

	export interface Prototype {
		observe(target: Node, options: Init.Constrained): void;
		disconnect(): void;
		takeRecords(): MutationRecord.Constrained[];
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (callback: MutationCallback): MutationObserver;
	}
}

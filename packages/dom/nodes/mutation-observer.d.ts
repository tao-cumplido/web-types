/** @Window */

import type { MutationRecord } from './mutation-record';
import type { Node } from './node';

export type MutationCallback = (mutations: MutationRecord[], observer: MutationObserver) => void;

interface MutationObserverInitBase {
	childList?: boolean;
	attributes?: boolean;
	characterData?: boolean;
	subtree?: boolean;
	attributeOldValue?: boolean;
	characterDataOldValue?: boolean;
	attributeFilter?: readonly string[];
}

// prettier-ignore
export type MutationObserverInit =
   MutationObserverInitBase &
	({ childList: true } | { attributes: true } | { characterData: true }) &
   ({ attributes?: true; attributeOldValue?: true } | { attributes?: false; attributeOldValue?: false }) &
   ({ attributes?: true; attributeFilter: readonly string[] } | { attributes?: false; attributeFilter?: undefined }) &
   ({ characterData?: true; characterDataOldValue?: true } | { characterData?: false; characterDataOldValue?: false });

export class MutationObserver {
	constructor(callback: MutationCallback);

	/**
	 * @throws {TypeError} The options object must set at least one of 'attributes', 'characterData', or 'childList' to true.
	 * @throws {TypeError} The options object may only set 'attributeOldValue' to true when 'attributes' is true or not present.
	 * @throws {TypeError} The options object may only set 'attributeFilter' when 'attributes' is true or not present.
	 * @throws {TypeError} The options object may only set 'characterDataOldValue' to true when 'characterData' is true or not present.
	 */
	observe(target: Node, options: MutationObserverInit): void;
	disconnect(): void;
	takeRecords(): MutationRecord[];
}

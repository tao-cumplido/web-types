import type { Node } from '../../dom';
import type { DOMRect } from '../../geometry';

/** @spec https://drafts.csswg.org/cssom-view-1/#the-caretposition-interface */
export interface CaretPosition extends CaretPosition.Interface {}

/** @exposed Window */
export namespace CaretPosition {
	export interface Prototype {
		readonly offsetNode: Node;
		readonly offset: number;
		getClientRect(): DOMRect | null;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

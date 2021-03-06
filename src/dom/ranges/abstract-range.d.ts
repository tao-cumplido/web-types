import type { Node } from '../node';

/** @spec https://dom.spec.whatwg.org/#interface-abstractrange */
export interface AbstractRange extends AbstractRange.Interface {}

/** @exposed Window */
export namespace AbstractRange {
	export interface Prototype {
		readonly startContainer: Node;
		readonly startOffset: number;
		readonly endContainer: Node;
		readonly endOffset: number;
		readonly collapsed: boolean;
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

import type { IndexedIterable } from '../iterable';
import type { DOMRect } from './dom-rect';

/** @spec https://drafts.fxtf.org/geometry-1/#DOMRectList */
export interface DOMRectList extends DOMRectList.Interface {}

/** @exposed Window */
export namespace DOMRectList {
	export interface Prototype extends IndexedIterable<DOMRect> {
		readonly length: number;
		item(index: number): DOMRect | null;
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

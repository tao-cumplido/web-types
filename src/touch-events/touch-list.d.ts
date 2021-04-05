import type { IndexedIterable } from '../iterable';
import type { Touch } from './touch';

/** @spec https://w3c.github.io/touch-events/#touchlist-interface */
export interface TouchList extends TouchList.Interface {}

/** @exposed Window */
export namespace TouchList {
	export interface Prototype extends IndexedIterable<Touch> {
		readonly length: number;
		item(index: number): Touch;
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

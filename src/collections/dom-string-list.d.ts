import type { IndexedIterable } from '../iterable';

/** @deprecated */
export interface DOMStringList extends DOMStringList.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace DOMStringList {
	export interface Prototype extends IndexedIterable<string> {
		readonly length: number;
		item(index: number): string | null;
		contains(string: string): boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

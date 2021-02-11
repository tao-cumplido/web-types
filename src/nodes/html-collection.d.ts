import type { IndexedIterable } from '../iterable';
import type { Element } from './element';

export interface HTMLCollection<Item extends Element = Element> extends HTMLCollection.Interface<Item> {}

/**
 * @exposed Window
 */
export namespace HTMLCollection {
	export type LegacyUnenumerableNamedProperties<T extends Element = Element> = HTMLCollection<T> & Record<string, T>;

	export interface Prototype<Item extends Element = Element> extends IndexedIterable<Item> {
		readonly length: number;
		item(index: number): Item | null;
		namedItem(name: string): Item | null;
	}

	export type Interface<Item extends Element = Element> = Prototype<Item>;

	export interface Static<Item extends Element = Element> {
		prototype: Prototype<Item>;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new <Item extends Element = Element>(): HTMLCollection<Item>;
	}
}

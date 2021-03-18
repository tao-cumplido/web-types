import type { Element } from '../dom';
import type { IndexedIterable } from '../iterable';
import type { HTMLCollection } from './html-collection';

/** @spec https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#the-htmlallcollection-interface */
export interface HTMLAllCollection extends HTMLAllCollection.Interface {}

/** @exposed Window */
export namespace HTMLAllCollection {
	export type LegacyUnenumerableNamedProperties = HTMLAllCollection & Record<string, HTMLCollection | Element>;

	export interface Prototype extends IndexedIterable<Element> {
		readonly length: number;

		(index: number): Element | null;
		(name: ''): null;
		(name: string): HTMLCollection | Element | null;

		namedItem(name: ''): null;
		namedItem(name: string): HTMLCollection | Element | null;
		item(index: number): Element | null;
		item(name: ''): null;
		item(name: string): HTMLCollection | Element | null;
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

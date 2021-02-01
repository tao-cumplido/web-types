/** @Window */

import type { Element } from './element';

export interface HTMLCollection<Item extends Element = Element> {
	[index: number]: Item | null;
	readonly length: number;
	[Symbol.iterator]: IterableIterator<Item>;
	item(index: number): Item | null;
	namedItem(name: string): Item | null;
}

export interface HTMLCollectionConstructor extends Function {
	prototype: HTMLCollection;
	/** @abstract */
	new (): HTMLCollection;
}

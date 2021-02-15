import type { Node } from '../dom';
import type { IndexedIterable, KeyValueIterable } from '../iterable';

export interface NodeList<Item extends Node = Node> extends NodeList.Interface<Item> {}

/**
 * @exposed Window
 */
export namespace NodeList {
	export interface Prototype<Item extends Node = Node> extends IndexedIterable<Item>, KeyValueIterable<number, Item> {
		readonly length: number;
		item(index: number): Item | null;
	}

	export type Interface<Item extends Node = Node> = Prototype<Item>;

	export interface Static<Item extends Node = Node> {
		prototype: Prototype<Item>;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

import type { IndexedIterable, KeyValueIterable } from '../iterable';
import type { Node } from './node';

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
		new <Item extends Node = Node>(): NodeList<Item>;
	}
}

/** @Window */

import type { WebIDLIterable } from './mixins';
import type { Node } from './node';

export interface NodeList<Item extends Node = Node> extends WebIDLIterable<number, Item> {
	[index: number]: Item | null;
	readonly length: number;
	item(index: number): Item | null;
}

export interface NodeListConstructor extends Function {
	prototype: NodeList;
	/** @abstract */
	new <Item extends Node = Node>(): NodeList<Item>;
}

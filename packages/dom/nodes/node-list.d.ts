/** @Window */

import type { WebIDLIterable } from './mixins';
import type { Node } from './node';

export declare interface NodeList<Item extends Node> extends WebIDLIterable<number, Item> {}
export declare abstract class NodeList<Item extends Node = Node> implements Iterable<Item> {
	[index: number]: Item | null;
	readonly length: number;
	item(index: number): Item | null;
}

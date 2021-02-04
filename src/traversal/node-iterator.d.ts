/** @Window */

import type { Node } from '../nodes';
import type { NodeFilter } from './node-filter';

export interface NodeIterator {
	readonly root: Node;
	readonly referenceNode: Node;
	readonly pointerBeforeReferenceNode: boolean;
	readonly whatToShow: number;
	readonly filter: NodeFilter | null;

	nextNode(): Node | null;
	previousNode(): Node | null;

	detach(): void;
}

export interface NodeIteratorConstructor extends Function {
	prototype: NodeIterator;
	/** @abstract */
	new (): NodeIterator;
}

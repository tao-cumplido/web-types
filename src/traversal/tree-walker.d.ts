/** @Window */

import type { Node } from '../nodes';
import type { NodeFilter } from './node-filter';

export interface TreeWalker {
	readonly root: Node;
	readonly whatToShow: number;
	readonly filter: NodeFilter | null;

	currentNode: Node;

	parentNode(): Node | null;
	firstChild(): Node | null;
	lastChild(): Node | null;
	previousSibling(): Node | null;
	nextSibling(): Node | null;
	previousNode(): Node | null;
	nextNode(): Node | null;
}

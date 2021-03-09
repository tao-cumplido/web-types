import type { Node } from '../node';
import type { NodeFilter } from './node-filter';

/** @spec https://dom.spec.whatwg.org/#interface-treewalker */
export interface TreeWalker extends TreeWalker.Interface {}

/** @exposed Window */
export namespace TreeWalker {
	export interface Prototype {
		readonly root: Node;
		readonly whatToShow: number;
		readonly filter: NodeFilter.Interface | null;

		currentNode: Node;

		parentNode(): Node | null;
		firstChild(): Node | null;
		lastChild(): Node | null;
		previousSibling(): Node | null;
		nextSibling(): Node | null;
		previousNode(): Node | null;
		nextNode(): Node | null;
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

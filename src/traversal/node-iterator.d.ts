import type { Node } from '../nodes';
import type { NodeFilter } from './node-filter';

export interface NodeIterator extends NodeIterator.Interface {}

/**
 * @exposed Window
 */
export namespace NodeIterator {
	export interface Prototype {
		readonly root: Node;
		readonly referenceNode: Node;
		readonly pointerBeforeReferenceNode: boolean;
		readonly whatToShow: number;
		readonly filter: NodeFilter.Interface | null;

		nextNode(): Node | null;
		previousNode(): Node | null;

		detach(): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): NodeIterator;
	}
}

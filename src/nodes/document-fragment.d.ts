import type { Document } from './document';
import type { NonElementParentNode, ParentNode } from './mixins';
import type { Node } from './node';

export interface DocumentFragment extends DocumentFragment.Interface {}

/**
 * @exposed Window
 */
export namespace DocumentFragment {
	export interface Prototype extends Node.Prototype, NonElementParentNode, ParentNode {
		readonly [Symbol.unscopables]: ParentNode.Unscopables;

		readonly nodeType: Node.NodeTypesLegacyEnum['DOCUMENT_FRAGMENT_NODE'];
		readonly nodeName: '#document-fragment';
		readonly ownerDocument: Document;
		readonly parentNode: null;
		readonly parentElement: null;
		readonly previousSibling: null;
		readonly nextSibling: null;
		readonly nodeValue: null;
		readonly textContent: string;

		lookupPrefix(namespace: string | null): null;
	}

	export type Interface = Prototype & Node.Interface;

	export interface Static extends Node.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): DocumentFragment;
	}
}

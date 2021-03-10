import type { Document } from './document';
import type { NonElementParentNode, ParentNode } from './mixins';
import type { Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-documentfragment */
export interface DocumentFragment extends DocumentFragment.Interface {}

/** @exposed Window */
export namespace DocumentFragment {
	export interface Prototype extends Node.Prototype, NonElementParentNode, ParentNode {
		readonly [Symbol.unscopables]: ParentNode.Unscopables;

		readonly nodeType: Node.NodeTypes['DOCUMENT_FRAGMENT_NODE'];
		readonly nodeName: '#document-fragment';
		readonly ownerDocument: Document.NamedProperties;
		readonly parentNode: null;
		readonly parentElement: null;
		readonly previousSibling: null;
		readonly nextSibling: null;

		nodeValue: null;
		textContent: string;

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

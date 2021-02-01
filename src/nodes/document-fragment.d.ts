/** @Window */

import type { Document } from './document';
import type { NonElementParentNode, ParentNode } from './mixins';
import type { Node, NodeConstructor, NodeTypes } from './node';

export interface DocumentFragment extends Node, NonElementParentNode, ParentNode {
	readonly nodeType: NodeTypes['DOCUMENT_FRAGMENT_NODE'];
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

export interface DocumentFragmentConstructor extends NodeConstructor {
	prototype: DocumentFragment;
	new (): DocumentFragment;
}

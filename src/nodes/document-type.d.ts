/** @Window */

import type { Document } from './document';
import type { ChildNode } from './mixins';
import type { Node, NodeConstructor, NodeTypes } from './node';

export interface DocumentType extends Node, ChildNode {
	readonly nodeType: NodeTypes['DOCUMENT_TYPE_NODE'];
	readonly ownerDocument: Document;
	readonly parentNode: Document;
	readonly parentElement: null;
	readonly nodeValue: null;
	readonly textContent: null;

	readonly name: string;
	readonly publicId: string;
	readonly systemId: string;

	lookupPrefix(namespace: string | null): null;
}

export interface DocumentTypeConstructor extends NodeConstructor {
	prototype: DocumentType;
	/** @abstract */
	new (): DocumentType;
}

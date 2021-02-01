/** @Window */

import type { Document, XMLDocument } from './document';
import type { DocumentType } from './document-type';

export interface DOMImplementation {
	createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
	createDocument(namespace: string | null, qualifiedName: string, doctype?: DocumentType | null): XMLDocument;
	createHTMLDocument(title?: string): Document;

	/** @deprecated */
	hasFeature(): true;
}

export interface DOMImplementationConstructor extends Function {
	prototype: DOMImplementation;
	/** @abstract */
	new (): DOMImplementation;
}

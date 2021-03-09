import type { Document, XMLDocument } from './document';
import type { DocumentType } from './document-type';

/** @spec https://dom.spec.whatwg.org/#interface-domimplementation */
export interface DOMImplementation extends DOMImplementation.Interface {}

/** @exposed Window */
export namespace DOMImplementation {
	export interface Prototype {
		createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
		createDocument(namespace: string | null, qualifiedName: string, doctype?: DocumentType | null): XMLDocument;
		createHTMLDocument(title?: string): Document.NamedProperties;

		/** @deprecated */
		hasFeature(): true;
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

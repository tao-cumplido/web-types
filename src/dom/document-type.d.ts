import type { Document } from './document';
import type { ChildNode } from './mixins';
import type { Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-documenttype */
export interface DocumentType extends DocumentType.Interface {}

/** @exposed Window */
export namespace DocumentType {
	export interface Prototype extends Node.Prototype, ChildNode {
		readonly [Symbol.unscopables]: ChildNode.Unscopables;

		readonly nodeType: Node.NodeTypes['DOCUMENT_TYPE_NODE'];
		readonly ownerDocument: Document.NamedProperties;
		readonly parentNode: Document.NamedProperties;
		readonly parentElement: null;
		readonly nodeValue: null;
		readonly textContent: null;

		readonly name: string;
		readonly publicId: string;
		readonly systemId: string;

		lookupPrefix(namespace: string | null): null;
	}

	export type Interface = Prototype & Node.Interface;

	export interface Static extends Node.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

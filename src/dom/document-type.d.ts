import type { ChildNode } from '../mixins';
import type { Document } from './document';
import type { Node } from './node';

export interface DocumentType extends DocumentType.Interface {}

/**
 * @exposed Window
 */
export namespace DocumentType {
	export interface Prototype extends Node.Prototype, ChildNode {
		readonly [Symbol.unscopables]: ChildNode.Unscopables;

		readonly nodeType: Node.NodeTypesLegacyEnum['DOCUMENT_TYPE_NODE'];
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

	export type Interface = Prototype & Node.Interface;

	export interface Static extends Node.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

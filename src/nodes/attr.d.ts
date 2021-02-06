import type { Document } from './document';
import type { Element } from './element';
import type { LeafNode, Node } from './node';

export interface Attr<Owner extends Element | null = Element | null> extends Attr.Interface<Owner> {}

/**
 * @exposed Window
 */
export namespace Attr {
	export interface Prototype<Owner extends Element | null = Element | null> extends LeafNode.Prototype {
		/** @deprecated */
		readonly nodeType: Node.NodeTypesLegacyEnum['ATTRIBUTE_NODE'];
		/** @deprecated */
		readonly nodeName: string;
		/** @deprecated */
		readonly ownerDocument: Document;
		/** @deprecated */
		readonly parentNode: null;
		/** @deprecated */
		readonly previousSibling: null;
		/** @deprecated */
		readonly nextSibling: null;
		/** @deprecated */
		readonly nodeValue: string;
		/** @deprecated */
		readonly textContent: string;

		readonly namespaceURI: string | null;
		readonly prefix: string | null;
		readonly localName: string;
		readonly name: string;
		readonly ownerElement: Owner;

		/** @deprecated */
		readonly specified: true;

		value: string;

		/** @deprecated */
		normalize(): void;
		/** @deprecated */
		cloneNode(deep?: boolean): this;
		/** @deprecated */
		isEqualNode(otherNode: Node | null): boolean;
	}

	export type Interface<Owner extends Element | null = Element | null> = Prototype<Owner> & LeafNode.Interface;

	export interface Static extends LeafNode.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): Attr;
	}
}

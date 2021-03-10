import type { Document } from './document';
import type { Element } from './element';
import type { LeafNode, Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-attr */
export interface Attr<Owner extends Element | null = Element | null> extends Attr.Interface<Owner> {}

/** @exposed Window */
export namespace Attr {
	export interface Prototype<Owner extends Element | null = Element | null> extends LeafNode.Prototype {
		/** @deprecated */
		readonly nodeType: Node.NodeTypes['ATTRIBUTE_NODE'];
		/** @deprecated */
		readonly nodeName: string;
		/** @deprecated */
		readonly ownerDocument: Document.NamedProperties;
		/** @deprecated */
		readonly parentNode: null;
		/** @deprecated */
		readonly previousSibling: null;
		/** @deprecated */
		readonly nextSibling: null;

		readonly namespaceURI: string | null;
		readonly prefix: string | null;
		readonly localName: string;
		readonly name: string;
		readonly ownerElement: Owner;

		/** @deprecated */
		readonly specified: true;

		/** @deprecated */
		nodeValue: string;
		/** @deprecated */
		textContent: string;

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
		new (): never;
	}
}

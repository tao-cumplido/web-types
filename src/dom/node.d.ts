import type { ValueOf } from '../@types';
import type { NodeList } from '../collections';
import type { EventTarget } from '../event';
import type { Document } from './document';
import type { DocumentFragment } from './document-fragment';
import type { Element } from './element';
import type { ShadowRoot } from './shadow-root';

/** @spec https://dom.spec.whatwg.org/#dictdef-getrootnodeoptions */
export interface GetRootNodeOptions {
	composed?: boolean;
}

/** @spec https://dom.spec.whatwg.org/#interface-node */
export interface Node extends Node.Interface {}

/** @exposed Window */
export namespace Node {
	export interface NodeTypes {
		readonly ELEMENT_NODE: 1;
		readonly ATTRIBUTE_NODE: 2;
		readonly TEXT_NODE: 3;
		readonly CDATA_SECTION_NODE: 4;
		/** @deprecated */
		readonly ENTITY_REFERENCE_NODE: 5;
		/** @deprecated */
		readonly ENTITY_NODE: 6;
		readonly PROCESSING_INSTRUCTION_NODE: 7;
		readonly COMMENT_NODE: 8;
		readonly DOCUMENT_NODE: 9;
		readonly DOCUMENT_TYPE_NODE: 10;
		readonly DOCUMENT_FRAGMENT_NODE: 11;
		/** @deprecated */
		readonly NOTATION_NODE: 12;
	}

	export interface DocumentPositions {
		readonly DOCUMENT_POSITION_DISCONNECTED: 0x01;
		readonly DOCUMENT_POSITION_PRECEDING: 0x02;
		readonly DOCUMENT_POSITION_FOLLOWING: 0x04;
		readonly DOCUMENT_POSITION_CONTAINS: 0x08;
		readonly DOCUMENT_POSITION_CONTAINED_BY: 0x10;
		readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20;
	}

	export interface Prototype extends EventTarget.Prototype, NodeTypes, DocumentPositions {
		readonly nodeType: ValueOf<NodeTypes>;
		readonly nodeName: string;
		readonly baseURI: string;
		readonly isConnected: boolean;
		readonly ownerDocument: Document.NamedProperties | null;
		readonly parentNode: Element | Document.NamedProperties | DocumentFragment | null;
		readonly parentElement: Element | null;
		readonly childNodes: NodeList;
		readonly firstChild: Node | null;
		readonly lastChild: Node | null;
		readonly previousSibling: Node | null;
		readonly nextSibling: Node | null;
		readonly nodeValue: string | null;
		readonly textContent: string | null;

		normalize(): void;

		getRootNode(options: { composed: true }): Document.NamedProperties;
		getRootNode(options?: GetRootNodeOptions): Document.NamedProperties | ShadowRoot;
		hasChildNodes(): boolean;

		cloneNode(deep?: boolean): this;
		isEqualNode(otherNode: Node | null): boolean;

		compareDocumentPosition(other: Node): number;
		contains(other: Node | null): boolean;

		lookupPrefix(namespace: string | null): string | null;
		lookupNamespaceURI(prefix: string | null): string | null;
		isDefaultNamespace(namespace: string | null): boolean;

		insertBefore<T extends Node>(node: T, child: Node | null): T;
		appendChild<T extends Node>(node: T): T;
		replaceChild<T extends Node>(node: Node, child: T): T;
		removeChild<T extends Node>(child: T): T;

		/** @deprecated legacy alias of === */
		isSameNode(otherNode: Node | null): boolean;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static, NodeTypes, DocumentPositions {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

/** @nonStandard */
export namespace LeafNode {
	export interface Prototype extends Node.Prototype {
		readonly ownerDocument: Document.NamedProperties;

		/** @deprecated */
		readonly childNodes: NodeList<never>;
		/** @deprecated */
		readonly firstChild: null;
		/** @deprecated */
		readonly lastChild: null;

		/** @deprecated */
		hasChildNodes(): false;
		/** @deprecated */
		insertBefore(node: Node, child: Node): never;
		/** @deprecated */
		appendChild(node: Node): never;
		/** @deprecated */
		replaceChild(node: Node, child: Node): never;
		/** @deprecated */
		removeChild(child: Node): never;
	}

	export type Interface = Prototype & Node.Interface;

	export interface Static extends Node.Static {
		prototype: Prototype;
	}
}

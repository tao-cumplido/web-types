/** @Window */

import type { Document } from './document';
import type { DocumentFragment } from './document-fragment';
import type { Element } from './element';
import type { NodeList } from './node-list';
import type { ShadowRoot } from './shadow-root';
import { EventTarget } from '../event';

export declare interface NodeTypes {
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

export declare interface GetRootNodeOptions {
	composed?: boolean;
}

type NodeParents = Element | Document | DocumentFragment | null;

export declare interface Node extends NodeTypes {}
export declare abstract class Node<
	Parent extends NodeParents = NodeParents,
	Owner extends Document | null = Document
> extends EventTarget {
	readonly nodeType: NodeTypes[keyof NodeTypes];
	readonly nodeName: string;
	readonly baseURI: string;
	readonly isConnected: boolean;
	readonly ownerDocument: Owner;
	readonly parentNode: Parent;
	readonly parentElement: Extract<Parent, Element | null>;
	readonly childNodes: NodeList;
	readonly firstChild: Node | null;
	readonly lastChild: Node | null;

	getRootNode(options: { composed: true }): Document;
	getRootNode(options?: GetRootNodeOptions): Document | ShadowRoot;
}

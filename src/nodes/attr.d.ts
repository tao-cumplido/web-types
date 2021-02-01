import type { Document } from './document';
import type { LeafNode, Node, NodeTypes } from './node';

export interface Attr extends LeafNode {
	/** @deprecated */
	readonly nodeType: NodeTypes['ATTRIBUTE_NODE'];
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

	/** @deprecated */
	normalize(): void;
	/** @deprecated */
	cloneNode(deep?: boolean): this;
	/** @deprecated */
	isEqualNode(otherNode: Node | null): boolean;
}

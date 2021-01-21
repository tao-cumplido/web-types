import type { HTMLHtmlElement } from './html';
import type { DocumentOrShadowRoot, ElementQueryMap, NonElementParentNode, ParentNode } from './mixins';
import type { Node, NodeConstructor } from './node';

export interface DocumentQueryMap {
	html: HTMLHtmlElement;
}

export interface Document
	extends Node<null, null>,
		NonElementParentNode,
		DocumentOrShadowRoot,
		ParentNode<ElementQueryMap & DocumentQueryMap> {}

export interface DocumentConstructor extends NodeConstructor {
	prototype: Document;
	new (): Document;
}

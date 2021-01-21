import type { HTMLHtmlElement } from './html';
import type { DocumentOrShadowRoot, ElementQueryMap, NonElementParentNode, ParentNode } from './mixins';
import { Node } from './node';

export declare interface DocumentQueryMap {
	html: HTMLHtmlElement;
}

export declare interface Document
	extends NonElementParentNode,
		DocumentOrShadowRoot,
		ParentNode<ElementQueryMap & DocumentQueryMap> {}
export declare class Document extends Node<null, null> {}

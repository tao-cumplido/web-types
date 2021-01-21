import type { ChildNode, NonDocumentTypeChildNode, ParentNode, Slottable } from './mixins';
import type { Node, NodeConstructor } from './node';

export interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slottable {
	readonly tagName: string;
}

export interface ElementConstructor extends NodeConstructor {
	prototype: Element;
	/** @abstract */
	new (): Element;
}

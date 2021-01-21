import type { ChildNode } from './mixins';
import type { Node, NodeConstructor } from './node';

export interface DocumentType extends Node, ChildNode {}

export interface DocumentTypeConstructor extends NodeConstructor {
	prototype: DocumentType;
	/** @abstract */
	new (): DocumentType;
}

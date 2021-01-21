import type { ChildNode, NonDocumentTypeChildNode } from './mixins';
import type { Node, NodeConstructor } from './node';

export interface CharacterData extends Node, NonDocumentTypeChildNode, ChildNode {}

export interface CharacterDataConstructor extends NodeConstructor {
	prototype: CharacterData;
	/** @abstract */
	new (): CharacterData;
}

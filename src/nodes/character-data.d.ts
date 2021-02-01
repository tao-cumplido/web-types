import type { ChildNode, NonDocumentTypeChildNode } from './mixins';
import type { LeafNode, NodeConstructor, NodeTypes } from './node';

export interface CharacterData extends LeafNode, NonDocumentTypeChildNode, ChildNode {
	readonly nodeType:
		| NodeTypes['ATTRIBUTE_NODE']
		| NodeTypes['CDATA_SECTION_NODE']
		| NodeTypes['COMMENT_NODE']
		| NodeTypes['PROCESSING_INSTRUCTION_NODE']
		| NodeTypes['TEXT_NODE'];

	readonly nodeValue: string;
	readonly textContent: string;
}

export interface CharacterDataConstructor extends NodeConstructor {
	prototype: CharacterData;
	/** @abstract */
	new (): CharacterData;
}

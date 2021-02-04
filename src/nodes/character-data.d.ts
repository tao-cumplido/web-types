/** @Window */

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

	readonly length: number;

	data: string;

	substringData(offset: number, count: number): string;
	appendData(data: string): void;
	insertData(offset: number, data: string): void;
	deleteData(offset: number, count: number): void;
	replaceData(offset: number, count: number, data: string): void;
}

export interface CharacterDataConstructor extends NodeConstructor {
	prototype: CharacterData;
	/** @abstract */
	new (): CharacterData;
}

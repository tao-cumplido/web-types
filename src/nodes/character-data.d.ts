import type { ValueOf } from '../@types';
import type { ChildNode, NonDocumentTypeChildNode } from './mixins';
import type { LeafNode, Node } from './node';

export interface CharacterData extends CharacterData.Interface {}

/**
 * @exposed Window
 */
export namespace CharacterData {
	export interface Prototype extends LeafNode.Prototype, NonDocumentTypeChildNode, ChildNode {
		readonly [Symbol.unscopables]: ChildNode.Unscopables;

		readonly nodeType: ValueOf<
			Pick<
				Node.NodeTypesLegacyEnum,
				'ATTRIBUTE_NODE' | 'CDATA_SECTION_NODE' | 'COMMENT_NODE' | 'PROCESSING_INSTRUCTION_NODE' | 'TEXT_NODE'
			>
		>;

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

	export type Interface = Prototype & LeafNode.Interface;

	export interface Static extends LeafNode.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): CharacterData;
	}
}

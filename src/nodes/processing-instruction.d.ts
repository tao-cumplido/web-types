import type { CharacterData } from './character-data';
import type { NodeTypes } from './node';

export interface ProcessingInstruction extends CharacterData {
	readonly nodeType: NodeTypes['PROCESSING_INSTRUCTION_NODE'];
}

/** @Window */

import type { CharacterData, CharacterDataConstructor } from './character-data';
import type { NodeTypes } from './node';

export interface ProcessingInstruction extends CharacterData {
	readonly nodeType: NodeTypes['PROCESSING_INSTRUCTION_NODE'];

	readonly target: string;
}

export interface ProcessingInstructionConstructor extends CharacterDataConstructor {
	prototype: ProcessingInstruction;
	/** @abstract */
	new (): ProcessingInstruction;
}

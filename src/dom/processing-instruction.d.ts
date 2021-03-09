import type { CharacterData } from './character-data';
import type { Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-processinginstruction */
export interface ProcessingInstruction extends ProcessingInstruction.Interface {}

/** @exposed Window */
export namespace ProcessingInstruction {
	export interface Prototype extends CharacterData.Prototype {
		readonly nodeType: Node.NodeTypes['PROCESSING_INSTRUCTION_NODE'];

		readonly target: string;
	}

	export type Interface = Prototype & CharacterData.Interface;

	export interface Static extends CharacterData.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

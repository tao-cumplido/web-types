/** @Window */

import type { CharacterData, CharacterDataConstructor } from './character-data';
import type { Slottable } from './mixins';
import type { NodeTypes } from './node';

export interface Text extends CharacterData, Slottable {
	readonly nodeType: NodeTypes['CDATA_SECTION_NODE'] | NodeTypes['TEXT_NODE'];
	readonly nodeName: '#cdata-section' | '#text';

	readonly wholeText: string;

	splitText(offset: number): Text;
}

export interface TextConstructor extends CharacterDataConstructor {
	prototype: Text;
	new (): Text;
}

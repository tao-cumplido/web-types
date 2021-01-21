import type { CharacterData, CharacterDataConstructor } from './character-data';
import type { Slottable } from './mixins';

export interface Text extends CharacterData, Slottable {}

export interface TextConstructor extends CharacterDataConstructor {
	prototype: Text;
	new (): Text;
}

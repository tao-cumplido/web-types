import type { CharacterData } from './character-data';
import type { Slottable } from './mixins';
import type { Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-text */
export interface Text extends Text.Interface<Text.Type.Text> {}

/** @exposed Window */
export namespace Text {
	export enum Type {
		CDATASection = '#cdata-section',
		// eslint-disable-next-line @typescript-eslint/no-shadow
		Text = '#text',
	}

	export interface Prototype<T extends Type = Type.Text> extends CharacterData.Prototype, Slottable {
		readonly nodeType: Node.NodeTypes[T extends Type.Text ? 'TEXT_NODE' : 'CDATA_SECTION_NODE'];
		readonly nodeName: T;

		readonly wholeText: string;

		splitText(offset: number): Text;
	}

	export type Interface<T extends Type = Type.Text> = Prototype<T> & CharacterData.Interface;

	export interface Static<T extends Type = Type.Text> extends CharacterData.Static {
		prototype: Prototype<T>;
	}

	export interface Constructor extends Static {
		new(): Text;
	}
}

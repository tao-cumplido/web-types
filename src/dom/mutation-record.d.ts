import type { NodeList } from '../collections';
import type { CharacterData } from './character-data';
import type { Node } from './node';

export interface MutationRecord extends MutationRecord.Interface {}

/**
 * @exposed Window
 */
export namespace MutationRecord {
	export type Constrained = MutationRecord &
		(
			| { type: 'attributes'; oldValue: string }
			| { type: 'characterData'; target: CharacterData; oldValue: string }
			| { type: 'childList'; oldValue: null }
		);

	export type Type = 'attributes' | 'characterData' | 'childList';

	export interface Prototype {
		readonly type: Type;
		readonly target: Node;
		readonly addedNodes: NodeList;
		readonly removedNodes: NodeList;
		readonly previousSibling: Node | null;
		readonly nextSibling: Node | null;
		readonly attributeName: string | null;
		readonly attributeNamespace: string | null;
		readonly oldValue: string | null;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

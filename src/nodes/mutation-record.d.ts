/** @Window */

import type { CharacterData } from './character-data';
import type { Node } from './node';
import type { NodeList } from './node-list';

interface MutationRecordBase {
	readonly type: 'attributes' | 'characterData' | 'childList';
	readonly target: Node;
	readonly addedNodes: NodeList;
	readonly removedNodes: NodeList;
	readonly previousSibling: Node | null;
	readonly nextSibling: Node | null;
	readonly attributeName: string | null;
	readonly attributeNamespace: string | null;
	readonly oldValue: string | null;
}

export type MutationRecord = MutationRecordBase &
	(
		| { type: 'attributes'; oldValue: string }
		| { type: 'characterData'; target: CharacterData; oldValue: string }
		| { type: 'childList'; oldValue: null }
	);

export interface MutationRecordConstructor extends Function {
	prototype: MutationRecordBase;
	/** @abstract */
	new (): MutationRecordBase;
}

/** @Window */

import type { CharacterData } from './character-data';
import type { Node } from './node';
import type { NodeList } from './node-list';

export declare class MutationRecord {
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

type ConstrainedMutationRecord = MutationRecord &
	(
		| { type: 'attributes'; oldValue: string }
		| { type: 'characterData'; target: CharacterData; oldValue: string }
		| { type: 'childList'; oldValue: null }
	);

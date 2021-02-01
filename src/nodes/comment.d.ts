import type { CharacterData } from './character-data';
import type { NodeTypes } from './node';

export interface Comment extends CharacterData {
	readonly nodeType: NodeTypes['COMMENT_NODE'];
	readonly nodeName: '#comment';
}

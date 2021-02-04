/** @Window */

import type { CharacterData, CharacterDataConstructor } from './character-data';
import type { NodeTypes } from './node';

export interface Comment extends CharacterData {
	readonly nodeType: NodeTypes['COMMENT_NODE'];
	readonly nodeName: '#comment';
}

export interface CommentConstructor extends CharacterDataConstructor {
	prototype: Comment;
	new (data?: string): Comment;
}

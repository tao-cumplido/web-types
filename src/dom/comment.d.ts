import type { CharacterData } from './character-data';
import type { Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-comment */
export interface Comment extends Comment.Interface {}

/** @exposed Window */
export namespace Comment {
	export interface Prototype extends CharacterData.Prototype {
		readonly nodeType: Node.NodeTypes['COMMENT_NODE'];
		readonly nodeName: '#comment';
	}

	export type Interface = Prototype & CharacterData.Interface;

	export interface Static extends CharacterData.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(data?: string): Comment;
	}
}

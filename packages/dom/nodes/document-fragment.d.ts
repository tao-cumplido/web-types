import type { NonElementParentNode, ParentNode } from './mixins';
import type { Node, NodeConstructor } from './node';

export interface DocumentFragment extends Node<null>, NonElementParentNode, ParentNode {}

export interface DocumentFragmentConstructor extends NodeConstructor {
	prototype: DocumentFragment;
	new (): DocumentFragment;
}

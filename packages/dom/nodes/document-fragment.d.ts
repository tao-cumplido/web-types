import type { NonElementParentNode, ParentNode } from './mixins';
import { Node } from './node';

export declare interface DocumentFragment extends NonElementParentNode, ParentNode {}
export declare class DocumentFragment extends Node<null> {}

import type { ChildNode, NonDocumentTypeChildNode, ParentNode, Slottable } from './mixins';
import { Node } from './node';

export declare interface Element extends ParentNode, NonDocumentTypeChildNode, ChildNode, Slottable {}
export declare abstract class Element extends Node {
	readonly tagName: string;
}

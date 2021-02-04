import type { ValueOf } from '../@types';
import type { ChildNode, DocumentFragment, Node, NodeTypes } from '../nodes';
import type { AbstractRange, AbstractRangeConstructor } from './abstract-range';

export interface RangeBoundaries {
	readonly START_TO_START: 0;
	readonly START_TO_END: 1;
	readonly END_TO_END: 2;
	readonly END_TO_START: 3;
}

interface BoundaryNode extends Node {
	readonly nodeType: ValueOf<Omit<NodeTypes, 'DOCUMENT_TYPE_NODE'>>;
}

interface NonParentNode extends Node, ChildNode {}

interface NewParentNode extends Node {
	readonly nodeType: ValueOf<Omit<NodeTypes, 'DOCUMENT_NODE' | 'DOCUMENT_TYPE_NODE' | 'DOCUMENT_FRAGMENT_NODE'>>;
}

export interface Range extends AbstractRange, RangeBoundaries {
	readonly commonAncestorContainer: Node;

	setStart(node: BoundaryNode, offset: number): void;
	setEnd(node: BoundaryNode, offset: number): void;
	setStartBefore(node: NonParentNode): void;
	setStartAfter(node: NonParentNode): void;
	setEndBefore(node: NonParentNode): void;
	setEndAfter(node: NonParentNode): void;
	collapse(toStart?: boolean): void;
	selectNode(node: NonParentNode): void;
	selectNodeContents(node: BoundaryNode): void;

	compareBoundaryPoints(how: ValueOf<RangeBoundaries>, sourceRange: Range): -1 | 0 | 1;

	deleteContents(): void;
	extractContents(): DocumentFragment;
	cloneContents(): DocumentFragment;
	insertNode(node: Node): void;
	surroundContents(newParent: NewParentNode): void;

	cloneRange(): Range;
	detach(): void;

	isPointInRange(node: BoundaryNode, offset: number): boolean;
	comparePoint(node: BoundaryNode, offset: number): -1 | 0 | 1;

	intersectsNode(node: Node): boolean;
}

export interface RangeConstructor extends AbstractRangeConstructor, RangeBoundaries {
	prototype: Range;
	new (): Range;
}

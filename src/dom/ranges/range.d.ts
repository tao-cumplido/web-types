import type { ValueOf } from '../../@types';
import type { ChildNode } from '../../mixins';
import type { DocumentFragment } from '../document-fragment';
import type { Node } from '../node';
import type { AbstractRange } from './abstract-range';

export interface Range extends Range.Interface {}

/**
 * @exposed Window
 */
export namespace Range {
	interface BoundaryNode extends Node {
		readonly nodeType: ValueOf<Omit<Node.NodeTypesLegacyEnum, 'DOCUMENT_TYPE_NODE'>>;
	}

	interface NonParentNode extends Node, ChildNode {}

	interface NewParentNode extends Node {
		readonly nodeType: ValueOf<
			Omit<Node.NodeTypesLegacyEnum, 'DOCUMENT_NODE' | 'DOCUMENT_TYPE_NODE' | 'DOCUMENT_FRAGMENT_NODE'>
		>;
	}

	export interface BoundariesLegacyEnum {
		readonly START_TO_START: 0;
		readonly START_TO_END: 1;
		readonly END_TO_END: 2;
		readonly END_TO_START: 3;
	}

	export interface Prototype extends AbstractRange.Prototype, BoundariesLegacyEnum {
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

		compareBoundaryPoints(how: ValueOf<BoundariesLegacyEnum>, sourceRange: Range): -1 | 0 | 1;

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

	export type Interface = Prototype & AbstractRange.Interface;

	export interface Static extends AbstractRange.Static, BoundariesLegacyEnum {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): Range;
	}
}

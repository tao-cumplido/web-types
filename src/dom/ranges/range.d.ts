import type { ValueOf } from '../../@types';
import type { ClientRectUtils } from '../../css';
import type { DocumentFragment } from '../document-fragment';
import type { ChildNode } from '../mixins';
import type { Node } from '../node';
import type { AbstractRange } from './abstract-range';

/**
 * @spec https://dom.spec.whatwg.org/#interface-range
 * @spec https://w3c.github.io/DOM-Parsing/#extensions-to-the-range-interface
 * @spec https://drafts.csswg.org/cssom-view-1/#extensions-to-the-range-interface
 */
export interface Range extends Range.Interface {}

/** @exposed Window */
export namespace Range {
	interface BoundaryNode extends Node, ClientRectUtils {
		readonly nodeType: ValueOf<Omit<Node.NodeTypes, 'DOCUMENT_TYPE_NODE'>>;
	}

	interface NonParentNode extends Node, ChildNode {}

	interface NewParentNode extends Node {
		readonly nodeType: ValueOf<Omit<Node.NodeTypes, 'DOCUMENT_NODE' | 'DOCUMENT_TYPE_NODE' | 'DOCUMENT_FRAGMENT_NODE'>>;
	}

	export interface Boundaries {
		readonly START_TO_START: 0;
		readonly START_TO_END: 1;
		readonly END_TO_END: 2;
		readonly END_TO_START: 3;
	}

	export interface Prototype extends AbstractRange.Prototype, Boundaries {
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

		compareBoundaryPoints(how: ValueOf<Boundaries>, sourceRange: Range): -1 | 0 | 1;

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

		createContextualFragment(fragment: string): DocumentFragment;
	}

	export type Interface = Prototype & AbstractRange.Interface;

	export interface Static extends AbstractRange.Static, Boundaries {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(): Range;
	}
}

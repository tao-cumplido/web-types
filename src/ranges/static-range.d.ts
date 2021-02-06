import type { ValueOf } from '../@types';
import type { Node } from '../nodes';
import type { AbstractRange } from './abstract-range';

export interface StaticRangeInit {
	startContainer: StaticRange.BoundaryContainerNode;
	startOffset: number;
	endContainer: StaticRange.BoundaryContainerNode;
	endOffset: number;
}

export interface StaticRange extends StaticRange.Interface {}

/**
 * @exposed Window
 */
export namespace StaticRange {
	export interface BoundaryContainerNode extends Node {
		readonly nodeType: ValueOf<Omit<Node.NodeTypesLegacyEnum, 'ATTRIBUTE_NODE' | 'DOCUMENT_TYPE_NODE'>>;
	}

	export interface Prototype extends AbstractRange.Prototype {}

	export type Interface = Prototype & AbstractRange.Interface;

	export interface Static extends AbstractRange.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (init: StaticRangeInit): StaticRange;
	}
}

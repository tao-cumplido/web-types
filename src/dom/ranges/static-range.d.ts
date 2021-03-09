import type { ValueOf } from '../../@types';
import type { Node } from '../node';
import type { AbstractRange } from './abstract-range';

/** @spec https://dom.spec.whatwg.org/#dictdef-staticrangeinit */
export interface StaticRangeInit {
	startContainer: StaticRange.BoundaryContainerNode;
	startOffset: number;
	endContainer: StaticRange.BoundaryContainerNode;
	endOffset: number;
}

/** @spec https://dom.spec.whatwg.org/#interface-staticrange */
export interface StaticRange extends StaticRange.Interface {}

/** @exposed Window */
export namespace StaticRange {
	export interface BoundaryContainerNode extends Node {
		readonly nodeType: ValueOf<Omit<Node.NodeTypes, 'ATTRIBUTE_NODE' | 'DOCUMENT_TYPE_NODE'>>;
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

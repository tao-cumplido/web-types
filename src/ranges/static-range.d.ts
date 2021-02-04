/** @Window */

import type { Attr, DocumentType, Node } from '../nodes';
import type { AbstractRange, AbstractRangeConstructor } from './abstract-range';

export interface StaticRangeInit {
	startContainer: Node;
	startOffset: number;
	endContainer: Node;
	endOffset: number;
}

export interface StaticRange extends AbstractRange {}

export interface StaticRangeConstructor extends AbstractRangeConstructor {
	prototype: StaticRange;
	/** @deprecated */
	new (): never;
	/** @deprecated */
	new (init: StaticRangeInit & { startContainer: DocumentType | Attr }): never;
	/** @deprecated */
	new (init: StaticRangeInit & { endContainer: DocumentType | Attr }): never;
	new (init: StaticRangeInit): StaticRange;
}

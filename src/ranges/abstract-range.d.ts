/** @Window */

import type { Node } from '../nodes';

export interface AbstractRange {
	readonly startContainer: Node;
	readonly startOffset: number;
	readonly endContainer: Node;
	readonly endOffset: number;
	readonly collapsed: boolean;
}

export interface AbstractRangeConstructor extends Function {
	prototype: AbstractRange;
	/** @abstract */
	new (): AbstractRange;
}

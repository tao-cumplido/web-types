import type { ValueOf } from '../@types';
import type { Node } from '../nodes';
import type { XPathResult } from './xpath-result';

export interface XPathExpression extends XPathExpression.Interface {}

/**
 * @exposed Window
 */
export namespace XPathExpression {
	export interface Prototype {
		evaluate(
			contextNode: Node,
			type?: ValueOf<XPathResult.ResultTypesLegacyEnum>,
			result?: XPathResult | null,
		): XPathResult;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): XPathExpression;
	}
}

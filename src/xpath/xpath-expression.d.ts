/** @Window */

import type { ValueOf } from '../@types';
import type { Node } from '../nodes';
import type { XPathResult, XPathResultTypes } from './xpath-result';

export interface XPathExpression {
	evaluate(contextNode: Node, type?: ValueOf<XPathResultTypes>, result?: XPathResult | null): XPathResult;
}

export interface XPathExpressionConstructor extends Function {
	prototype: XPathExpression;
	/** @abstract */
	new (): XPathExpression;
}

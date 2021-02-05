/** @Window */

import type { ValueOf } from '../@types';
import type { Node } from '../nodes';
import type { XPathExpression } from './xpath-expression';
import type { XPathResult, XPathResultType } from './xpath-result';

type XPathNSResolverCallback = (prefix: string | null) => string | null;

interface XPathNSResolverInterface {
	lookupNamespaceURI: XPathNSResolverCallback;
}

export type XPathNSResolver = XPathNSResolverCallback | XPathNSResolverInterface;

export interface XPathEvaluatorBase {
	createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
	createNSResolver(nodeResolver: Node): XPathNSResolverInterface;
	evaluate(
		expression: string,
		contextNode: Node,
		resolver?: XPathNSResolver | null,
		type?: ValueOf<XPathResultType>,
		result?: XPathResult | null,
	): XPathResult;
}

export interface XPathEvaluator extends XPathEvaluatorBase {}

export interface XPathEvaluatorConstructor extends Function {
	prototype: XPathEvaluator;
	new (): XPathEvaluator;
}

/** @Window */

import type { ValueOf } from '../@types';
import type { Node } from '../nodes';
import type { XPathExpression } from './xpath-expression';
import type { XPathResult, XPathResultType } from './xpath-result';

type XPathNSResolverCallback = (prefix: string | null) => string | null;

export type XPathNSResolver = XPathNSResolverCallback | { lookupNamespaceURI: XPathNSResolverCallback };

export interface XPathEvaluatorBase {
	createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
	createNSResolver(nodeResolver: Node): Exclude<XPathNSResolver, XPathNSResolverCallback>;
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

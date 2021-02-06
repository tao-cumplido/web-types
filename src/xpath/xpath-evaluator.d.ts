import type { ValueOf } from '../@types';
import type { Node } from '../nodes';
import type { XPathExpression } from './xpath-expression';
import type { XPathResult } from './xpath-result';

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
		type?: ValueOf<XPathResult.ResultTypesLegacyEnum>,
		result?: XPathResult | null,
	): XPathResult;
}

export interface XPathEvaluator extends XPathEvaluator.Interface {}

/**
 * @exposed Window
 */
export namespace XPathEvaluator {
	export interface Prototype extends XPathEvaluatorBase {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): XPathEvaluator;
	}
}

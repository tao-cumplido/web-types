import type { ValueOf } from '../../@types';
import type { Node } from '../node';
import type { XPathExpression } from './xpath-expression';
import type { XPathResult } from './xpath-result';

/** @spec https://dom.spec.whatwg.org/#callbackdef-xpathnsresolver */
export type XPathNSResolver = XPathNSResolver.Callback | XPathNSResolver.Interface;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export namespace XPathNSResolver {
	export type Callback = (prefix: string | null) => string | null;

	export interface Interface {
		lookupNamespaceURI: Callback;
	}
}

/** @spec https://dom.spec.whatwg.org/#xpathevaluatorbase */
export interface XPathEvaluatorBase {
	createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
	createNSResolver(nodeResolver: Node): XPathNSResolver.Interface;
	evaluate(
		expression: string,
		contextNode: Node,
		resolver?: XPathNSResolver | null,
		type?: ValueOf<XPathResult.ResultTypes>,
		result?: XPathResult | null,
	): XPathResult;
}

/** @spec https://dom.spec.whatwg.org/#interface-xpathevaluator */
export interface XPathEvaluator extends XPathEvaluator.Interface {}

/** @exposed Window */
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

import type { ValueOf } from '../../@types';
import type { Node } from '../node';
import type { XPathExpression } from './xpath-expression';
import type { XPathResult } from './xpath-result';

export interface XPathEvaluator extends XPathEvaluator.Interface {}

/**
 * @exposed Window
 */
export namespace XPathEvaluator {
	export type XPathNSResolver = XPathNSResolver.Callback | XPathNSResolver.Interface;

	// eslint-disable-next-line @typescript-eslint/no-redeclare
	export namespace XPathNSResolver {
		export type Callback = (prefix: string | null) => string | null;

		export interface Interface {
			lookupNamespaceURI: Callback;
		}
	}

	export interface Base {
		createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
		createNSResolver(nodeResolver: Node): XPathNSResolver.Interface;
		evaluate(
			expression: string,
			contextNode: Node,
			resolver?: XPathNSResolver | null,
			type?: ValueOf<XPathResult.ResultTypesLegacyEnum>,
			result?: XPathResult | null,
		): XPathResult;
	}

	export interface Prototype extends Base {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): XPathEvaluator;
	}
}

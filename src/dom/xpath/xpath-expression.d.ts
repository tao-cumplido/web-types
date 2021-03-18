import type { ValueOf } from '../../@types';
import type { Node } from '../node';
import type { XPathResult } from './xpath-result';

/** @spec https://dom.spec.whatwg.org/#interface-xpathexpression */
export interface XPathExpression extends XPathExpression.Interface {}

/** @exposed Window */
export namespace XPathExpression {
	export interface Prototype {
		evaluate(contextNode: Node, type?: ValueOf<XPathResult.ResultTypes>, result?: XPathResult | null): XPathResult;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

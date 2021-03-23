import type { CSSRule } from './css-rule';

/** @spec https://drafts.csswg.org/cssom/#the-cssnamespacerule-interface */
export interface CSSNamespaceRule extends CSSNamespaceRule.Interface {}

/** @exposed Window */
export namespace CSSNamespaceRule {
	export interface Prototype extends CSSRule.Prototype {
		readonly namespaceURI: string;
		readonly prefix: string;
	}

	export type Interface = Prototype & CSSRule.Interface;

	export interface Static extends CSSRule.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

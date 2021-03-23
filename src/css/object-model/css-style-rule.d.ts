import type { CSSRule } from './css-rule';
import type { CSSStyleDeclaration } from './css-style-declaration';

/** @spec https://drafts.csswg.org/cssom/#the-cssstylerule-interface */
export interface CSSStyleRule extends CSSStyleRule.Interface {}

/** @exposed Window */
export namespace CSSStyleRule {
	export interface Prototype extends CSSRule.Prototype {
		readonly style: CSSStyleDeclaration;
		selectorText: string;
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

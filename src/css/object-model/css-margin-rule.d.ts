import type { CSSRule } from './css-rule';
import type { CSSStyleDeclaration } from './css-style-declaration';

/** @spec https://drafts.csswg.org/cssom/#the-cssmarginrule-interface */
export interface CSSMarginRule extends CSSMarginRule.Interface {}

/** @exposed Window */
export namespace CSSMarginRule {
	export interface Prototype extends CSSRule.Prototype {
		readonly name: string;
		/** @putForwards cssText */
		readonly style: CSSStyleDeclaration;
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

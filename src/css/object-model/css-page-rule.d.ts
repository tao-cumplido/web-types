import type { CSSRule } from './css-rule';
import type { CSSStyleDeclaration } from './css-style-declaration';

/** @spec https://drafts.csswg.org/cssom/#the-csspagerule-interface */
export interface CSSPageRule extends CSSPageRule.Interface {}

/** @exposed Window */
export namespace CSSPageRule {
	export interface Prototype extends CSSRule.Prototype {
		/** @putForwards cssText */
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

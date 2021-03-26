import type { CSSRule, CSSStyleDeclaration } from '../object-model';

/** @spec https://drafts.csswg.org/css-device-adapt-1/#css-viewport-rule-interface */
export interface CSSViewportRule extends CSSViewportRule.Interface {}

/** @exposed Window */
export namespace CSSViewportRule {
	export interface Prototype extends CSSRule.Prototype {
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

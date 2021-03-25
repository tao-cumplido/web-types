import type { CSSRule, CSSStyleDeclaration } from '../object-model';

/** @spec https://drafts.csswg.org/css-animations-1/#interface-csskeyframerule */
export interface CSSKeyframeRule extends CSSKeyframeRule.Interface {}

/** @exposed Window */
export namespace CSSKeyframeRule {
	export interface Prototype extends CSSRule.Prototype {
		/** @putForwards cssText */
		readonly style: CSSStyleDeclaration;
		keyText: string;
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

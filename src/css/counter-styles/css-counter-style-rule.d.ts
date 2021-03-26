import type { CSSRule } from '../object-model';

/** @spec https://drafts.csswg.org/css-counter-styles-3/#the-csscounterstylerule-interface */
export interface CSSCounterStyleRule extends CSSCounterStyleRule.Interface {}

/** @exposed Window */
export namespace CSSCounterStyleRule {
	export interface Prototype extends CSSRule.Prototype {
		name: string;
		system: string;
		symbols: string;
		additiveSymbols: string;
		negative: string;
		prefix: string;
		suffix: string;
		range: string;
		pad: string;
		speakAs: string;
		fallback: string;
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

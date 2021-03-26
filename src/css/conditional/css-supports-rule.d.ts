import type { CSSConditionRule } from './css-condition-rule';

/** @spec https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface */
export interface CSSSuportsRule extends CSSSuportsRule.Interface {}

/** @exposed Window */
export namespace CSSSuportsRule {
	export interface Prototype extends CSSConditionRule.Prototype {}

	export type Interface = Prototype & CSSConditionRule.Interface;

	export interface Static extends CSSConditionRule.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

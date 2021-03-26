import type { CSSGroupingRule } from '../object-model';

/** @spec https://drafts.csswg.org/css-conditional-3/#the-cssconditionrule-interface */
export interface CSSConditionRule extends CSSConditionRule.Interface {}

/** @exposed Window */
export namespace CSSConditionRule {
	export interface Prototype extends CSSGroupingRule.Prototype {
		conditionText: string;
	}

	export type Interface = Prototype & CSSGroupingRule.Interface;

	export interface Static extends CSSGroupingRule.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

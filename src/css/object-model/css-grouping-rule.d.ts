import type { CSSRule } from './css-rule';
import type { CSSRuleList } from './css-rule-list';

/** @spec https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface */
export interface CSSGroupingRule extends CSSGroupingRule.Interface {}

/** @exposed Window */
export namespace CSSGroupingRule {
	export interface Prototype extends CSSRule.Prototype {
		readonly cssRules: CSSRuleList;
		insertRule(rule: string, index?: number): number;
		deleteRule(index: number): void;
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

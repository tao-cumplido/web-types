import type { CSSRule, CSSRuleList } from '../object-model';
import type { CSSKeyframeRule } from './css-keyframe-rule';

/** @spec https://drafts.csswg.org/css-animations-1/#interface-csskeyframesrule */
export interface CSSKeyframesRule extends CSSKeyframesRule.Interface {}

/** @exposed Window */
export namespace CSSKeyframesRule {
	export interface Prototype extends CSSRule.Prototype {
		readonly cssRules: CSSRuleList<CSSKeyframeRule>;
		name: string;

		appendRule(rule: string): void;
		deleteRule(select: string): void;
		findRule(select: string): CSSKeyframeRule | null;
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

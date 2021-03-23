import type { CSSRule } from './css-rule';
import type { CSSRuleList } from './css-rule-list';
import type { StyleSheet } from './style-sheet';

/**
 * @spec https://drafts.csswg.org/cssom/#the-cssstylesheet-interface
 * @spec https://drafts.csswg.org/cssom/#legacy-css-style-sheet-members
 */
export interface CSSStyleSheet extends CSSStyleSheet.Interface {}

/** @exposed Window */
export namespace CSSStyleSheet {
	export interface Prototype extends StyleSheet.Prototype {
		readonly ownerRule: CSSRule | null;
		readonly cssRules: CSSRuleList;

		/** @deprecated */
		readonly rules: CSSRuleList;

		insertRule(rule: string, index?: number): number;
		deleteRule(index: number): void;

		/** @deprecated */
		addRule(selector?: string, style?: string, index?: number): number;
		/** @deprecated */
		removeRule(index?: number): void;
	}

	export type Interface = Prototype & StyleSheet.Interface;

	export interface Static extends StyleSheet.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

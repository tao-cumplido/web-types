import type { IndexedIterable } from '../../iterable';
import type { CSSRule } from './css-rule';

/** @spec https://drafts.csswg.org/cssom/#the-cssrulelist-interface */
export interface CSSRuleList extends CSSRuleList.Interface {}

/** @exposed Window */
export namespace CSSRuleList {
	export interface Prototype extends IndexedIterable<CSSRule> {
		readonly length: number;
		item(index: number): CSSRule | null;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

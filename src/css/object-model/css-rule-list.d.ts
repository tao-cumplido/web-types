import type { IndexedIterable } from '../../iterable';
import type { CSSRule } from './css-rule';

/** @spec https://drafts.csswg.org/cssom/#the-cssrulelist-interface */
export interface CSSRuleList<Item extends CSSRule = CSSRule> extends CSSRuleList.Interface<Item> {}

/** @exposed Window */
export namespace CSSRuleList {
	export interface Prototype<Item extends CSSRule = CSSRule> extends IndexedIterable<Item> {
		readonly length: number;
		item(index: number): Item | null;
	}

	export type Interface<Item extends CSSRule = CSSRule> = Prototype<Item>;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

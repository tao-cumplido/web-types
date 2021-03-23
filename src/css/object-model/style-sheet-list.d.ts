import type { IndexedIterable } from '../../iterable';
import type { CSSStyleSheet } from './css-style-sheet';

/** @spec https://drafts.csswg.org/cssom/#the-stylesheetlist-interface */
export interface StyleSheetList extends StyleSheetList.Interface {}

/** @exposed Window */
export namespace StyleSheetList {
	export interface Prototype extends IndexedIterable<CSSStyleSheet> {
		readonly length: number;
		item(index: number): CSSStyleSheet | null;
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

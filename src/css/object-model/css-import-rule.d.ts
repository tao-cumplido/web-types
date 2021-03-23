import type { CSSRule } from './css-rule';
import type { CSSStyleSheet } from './css-style-sheet';
import type { MediaList } from './media-list';

/** @spec https://drafts.csswg.org/cssom/#the-cssimportrule-interface */
export interface CSSImportRule extends CSSImportRule.Interface {}

/** @exposed Window */
export namespace CSSImportRule {
	export interface Prototype extends CSSRule.Prototype {
		readonly href: string;
		/** @putForwards mediaText */
		readonly media: MediaList;
		readonly styleSheet: CSSStyleSheet;
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

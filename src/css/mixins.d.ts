import type { CSSStyleDeclaration } from './css-style-declaration';

/** @spec https://drafts.csswg.org/cssom/#the-linkstyle-interface */
export interface LinkStyle {
	// TODO
}

/** @spec https://drafts.csswg.org/cssom/#the-elementcssinlinestyle-mixin */
export interface ElementCSSInlineStyle {
	/** @putForwards cssText */
	readonly style: CSSStyleDeclaration;
}

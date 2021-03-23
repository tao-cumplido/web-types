import type { CSSStyleDeclaration } from './css-style-declaration';
import type { CSSStyleSheet } from './css-style-sheet';

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom/#the-linkstyle-interface
 */
export interface LinkStyle {
	readonly sheet: CSSStyleSheet | null;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom/#the-elementcssinlinestyle-mixin
 */
export interface ElementCSSInlineStyle {
	/** @putForwards cssText */
	readonly style: CSSStyleDeclaration;
}

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
export interface ElementCSSInlineStyle { // TODO: add to MathMLElement
	/** @putForwards cssText */
	readonly style: CSSStyleDeclaration;
}

/**
 * @spec https://drafts.csswg.org/cssom/#the-css.escape()-method
 * @spec https://drafts.csswg.org/css-conditional-3/#the-css-namespace
 */
export interface CSSNamespace {
	CSS: {
		escape(ident: string): string;
		supports(property: string, value: string): boolean;
		supports(conditionText: string): boolean;
	};
}

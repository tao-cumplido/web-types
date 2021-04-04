import type { DOMRect, DOMRectList } from '../../geometry';
import type { CSSStyleDeclaration } from './css-style-declaration';
import type { CSSStyleSheet } from './css-style-sheet';
import type { ScrollToOptions } from './types';

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

export interface ScrollUtils {
	scroll(options?: ScrollToOptions): void;
	scroll(x: number, y: number): void;
	scrollTo(options?: ScrollToOptions): void;
	scrollTo(x: number, y: number): void;
	scrollBy(options?: ScrollToOptions): void;
	scrollBy(x: number, y: number): void;
}

export interface ClientRectUtils {
	getClientRects(): DOMRectList;
	getBoundingClientRect(): DOMRect;
}

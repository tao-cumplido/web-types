import type { CSSStyleDeclaration } from '../css';

export interface ElementCSSInlineStyle {
	/** @putForwards cssText */
	readonly style: CSSStyleDeclaration;
}

import type { HTMLElement } from './html-element';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#htmlfontelement
 */
export interface HTMLFontElement extends HTMLFontElement.Interface {}

/** @exposed Window */
export namespace HTMLFontElement {
	export interface Prototype extends HTMLElement.Prototype {
		color: string;
		face: string;
		size: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/**
		 * @abstract
		 * @deprecated
		 */
		new(): HTMLFontElement;
	}
}

import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLHtmlElement-partial
 */
export interface HTMLHtmlElement extends HTMLHtmlElement.Interface {}

/** @exposed Window */
export namespace HTMLHtmlElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		version: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLHtmlElement;
	}
}

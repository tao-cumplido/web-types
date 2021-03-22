import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLBRElement-partial
 */
export interface HTMLBRElement extends HTMLBRElement.Interface {}

/** @exposed Window */
export namespace HTMLBRElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		clear: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLBRElement;
	}
}

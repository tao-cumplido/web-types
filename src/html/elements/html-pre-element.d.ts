import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLPreElement-partial
 */
export interface HTMLPreElement extends HTMLPreElement.Interface {}

/** @exposed Window */
export namespace HTMLPreElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		width: number;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLPreElement;
	}
}

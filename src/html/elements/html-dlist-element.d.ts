import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLDListElement-partial
 */
export interface HTMLDListElement extends HTMLDListElement.Interface {}

/** @exposed Window */
export namespace HTMLDListElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		compact: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLDListElement;
	}
}

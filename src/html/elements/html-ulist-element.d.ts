import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLUListElement-partial
 */
export interface HTMLUListElement extends HTMLUListElement.Interface {}

/** @exposed Window */
export namespace HTMLUListElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		compact: boolean;
		/** @deprecated */
		type: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLUListElement;
	}
}

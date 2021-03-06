import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLMenuElement-partial
 */
export interface HTMLMenuElement extends HTMLMenuElement.Interface {}

/** @exposed Window */
export namespace HTMLMenuElement {
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
		new(): HTMLMenuElement;
	}
}

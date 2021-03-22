import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLOListElement-partial
 */
export interface HTMLOListElement extends HTMLOListElement.Interface {}

/** @exposed Window */
export namespace HTMLOListElement {
	export interface Prototype extends HTMLElement.Prototype {
		reversed: boolean;
		start: number;
		type: string;

		/** @deprecated */
		compact: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLOListElement;
	}
}

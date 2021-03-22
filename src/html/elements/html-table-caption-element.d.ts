import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/tables.html#the-caption-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLTableCaptionElement-partial
 */
export interface HTMLTableCaptionElement extends HTMLTableCaptionElement.Interface {}

/** @exposed Window */
export namespace HTMLTableCaptionElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		align: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLTableCaptionElement;
	}
}

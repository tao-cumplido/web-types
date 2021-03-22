import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLHeadingElement-partial
 */
export interface HTMLHeadingElement extends HTMLHeadingElement.Interface {}

/** @exposed Window */
export namespace HTMLHeadingElement {
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
		new(): HTMLHeadingElement;
	}
}

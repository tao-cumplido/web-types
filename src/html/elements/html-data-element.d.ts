import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element */
export interface HTMLDataElement extends HTMLDataElement.Interface {}

/** @exposed Window */
export namespace HTMLDataElement {
	export interface Prototype extends HTMLElement.Prototype {
		value: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLDataElement;
	}
}

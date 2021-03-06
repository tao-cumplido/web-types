import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-param-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLParamElement-partial
 */
export interface HTMLParamElement extends HTMLParamElement.Interface {}

/** @exposed Window */
export namespace HTMLParamElement {
	export interface Prototype extends HTMLElement.Prototype {
		name: string;
		value: string;

		/** @deprecated */
		type: string;
		/** @deprecated */
		valueType: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLParamElement;
	}
}

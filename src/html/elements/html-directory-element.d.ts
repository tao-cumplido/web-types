import type { HTMLElement } from './html-element';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#htmldirectoryelement
 */
export interface HTMLDirectoryElement extends HTMLDirectoryElement.Interface {}

/** @exposed Window */
export namespace HTMLDirectoryElement {
	export interface Prototype extends HTMLElement.Prototype {
		compact: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/**
		 * @abstract
		 * @deprecated
		 */
		new(): HTMLDirectoryElement;
	}
}

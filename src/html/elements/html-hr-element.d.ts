import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLHRElement-partial
 */
export interface HTMLHRElement extends HTMLHRElement.Interface {}

/** @exposed Window */
export namespace HTMLHRElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @deprecated */
		align: string;
		/** @deprecated */
		color: string;
		/** @deprecated */
		noShade: boolean;
		/** @deprecated */
		size: string;
		/** @deprecated */
		width: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLHRElement;
	}
}

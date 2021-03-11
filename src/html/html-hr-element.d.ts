import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element */
export interface HTMLHRElement extends HTMLHRElement.Interface {}

/** @exposed Window */
export namespace HTMLHRElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLHRElement;
	}
}

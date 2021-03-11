import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element */
export interface HTMLPictureElement extends HTMLPictureElement.Interface {}

/** @exposed Window */
export namespace HTMLPictureElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLPictureElement;
	}
}

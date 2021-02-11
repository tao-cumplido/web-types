import type { Element } from '../../nodes';

export interface HTMLElement extends HTMLElement.Interface {}

export namespace HTMLElement {
	export interface Prototype extends Element.Prototype {}

	export type Interface = Prototype & Element.Interface;

	export interface Static extends Element.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLElement;
	}
}

export interface HTMLUnknownElement extends HTMLUnknownElement.Interface {}

export namespace HTMLUnknownElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {}
}

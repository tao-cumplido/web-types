import type { HTMLElement } from './html-element';

export interface HTMLHtmlElement extends HTMLHtmlElement.Interface {}

export namespace HTMLHtmlElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLHtmlElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		html: HTMLHtmlElement;
	}
}

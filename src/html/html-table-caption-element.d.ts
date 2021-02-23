import type { HTMLElement } from './html-element';

export interface HTMLTableCaptionElement extends HTMLTableCaptionElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLTableCaptionElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTableCaptionElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		caption: HTMLTableCaptionElement;
	}
}

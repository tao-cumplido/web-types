import type { HTMLElement } from './html-element';

export interface HTMLPictureElement extends HTMLPictureElement.Interface {}

/**
 * @exposed Window
 */
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

declare module '@tswt/core' {
	interface HTMLElementMap {
		picture: HTMLPictureElement;
	}
}

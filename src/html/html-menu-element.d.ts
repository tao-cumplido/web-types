import type { HTMLElement } from './html-element';

export interface HTMLMenuElement extends HTMLMenuElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLMenuElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLMenuElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		menu: HTMLMenuElement;
	}
}

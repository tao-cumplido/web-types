import type { HTMLElement } from './html-element';

export interface HTMLDListElement extends HTMLDListElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLDListElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLDListElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		dl: HTMLDListElement;
	}
}

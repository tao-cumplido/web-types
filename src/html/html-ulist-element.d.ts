import type { HTMLElement } from './html-element';

export interface HTMLUListElement extends HTMLUListElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLUListElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLUListElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		ul: HTMLUListElement;
	}
}

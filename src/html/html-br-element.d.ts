import type { HTMLElement } from './html-element';

export interface HTMLBRElement extends HTMLBRElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLBRElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLBRElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		br: HTMLBRElement;
	}
}

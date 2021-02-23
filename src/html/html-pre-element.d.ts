import type { HTMLElement } from './html-element';

export interface HTMLPreElement extends HTMLPreElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLPreElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLPreElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		pre: HTMLPreElement;
		listing: HTMLPreElement;
		xmp: HTMLPreElement;
	}
}

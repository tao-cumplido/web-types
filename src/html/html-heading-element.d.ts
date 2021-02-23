import type { HTMLElement } from './html-element';

export interface HTMLHeadingElement extends HTMLHeadingElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLHeadingElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLHeadingElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		h1: HTMLHeadingElement;
		h2: HTMLHeadingElement;
		h3: HTMLHeadingElement;
		h4: HTMLHeadingElement;
		h5: HTMLHeadingElement;
		h6: HTMLHeadingElement;
	}
}

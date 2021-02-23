import type { HTMLElement } from './html-element';

export interface HTMLHeadElement extends HTMLHeadElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLHeadElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLHeadElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		head: HTMLHeadElement;
	}
}

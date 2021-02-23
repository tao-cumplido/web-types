import type { HTMLElement } from './html-element';

export interface HTMLLIElement extends HTMLLIElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLLIElement {
	export interface Prototype extends HTMLElement.Prototype {
		value: number;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLLIElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		li: HTMLLIElement;
	}
}

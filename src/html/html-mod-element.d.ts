import type { HTMLElement } from './html-element';

export interface HTMLModElement extends HTMLModElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLModElement {
	export interface Prototype extends HTMLElement.Prototype {
		cite: string;
		dateTime: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLModElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		ins: HTMLModElement;
		del: HTMLModElement;
	}
}

import type { HTMLElement } from './html-element';

export interface HTMLQuoteElement extends HTMLQuoteElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLQuoteElement {
	export interface Prototype extends HTMLElement.Prototype {
		cite: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLQuoteElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		blockquote: HTMLQuoteElement;
		q: HTMLQuoteElement;
	}
}

import type { HTMLElement } from './html-element';

export interface HTMLSourceElement extends HTMLSourceElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLSourceElement {
	export interface Prototype extends HTMLElement.Prototype {
		src: string;
		type: string;
		srcset: string;
		sizes: string;
		media: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLSourceElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		source: HTMLSourceElement;
	}
}

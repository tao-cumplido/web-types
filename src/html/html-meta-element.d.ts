import type { HTMLElement } from './html-element';

export interface HTMLMetaElement extends HTMLMetaElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLMetaElement {
	export interface Prototype extends HTMLElement.Prototype {
		name: string;
		httpEquiv: string;
		content: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLMetaElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		meta: HTMLMetaElement;
	}
}

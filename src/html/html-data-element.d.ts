import type { HTMLElement } from './html-element';

export interface HTMLDataElement extends HTMLDataElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLDataElement {
	export interface Prototype extends HTMLElement.Prototype {
		value: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLDataElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		data: HTMLDataElement;
	}
}

import type { HTMLElement } from './html-element';

export interface HTMLTimeElement extends HTMLTimeElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLTimeElement {
	export interface Prototype extends HTMLElement.Prototype {
		dateTime: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTimeElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		time: HTMLTimeElement;
	}
}

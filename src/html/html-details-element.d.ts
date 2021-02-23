import type { HTMLElement } from './html-element';

export interface HTMLDetailsElement extends HTMLDetailsElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLDetailsElement {
	export interface Prototype extends HTMLElement.Prototype {
		open: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLDetailsElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		details: HTMLDetailsElement;
	}
}

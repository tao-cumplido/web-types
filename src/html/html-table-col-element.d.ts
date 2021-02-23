import type { HTMLElement } from './html-element';

export interface HTMLTableColElement extends HTMLTableColElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLTableColElement {
	export interface Prototype extends HTMLElement.Prototype {
		span: number;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTableColElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		colgroup: HTMLTableColElement;
		col: HTMLTableColElement;
	}
}

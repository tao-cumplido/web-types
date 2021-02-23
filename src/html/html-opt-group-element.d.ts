import type { HTMLElement } from './html-element';

export interface HTMLOptGroupElement extends HTMLOptGroupElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLOptGroupElement {
	export interface Prototype extends HTMLElement.Prototype {
		disabled: boolean;
		label: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLOptGroupElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		optgroup: HTMLOptGroupElement;
	}
}

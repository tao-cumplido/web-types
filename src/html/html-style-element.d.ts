import type { LinkStyle } from '../mixins';
import type { HTMLElement } from './html-element';

export interface HTMLStyleElement extends HTMLStyleElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLStyleElement {
	export interface Prototype extends HTMLElement.Prototype, LinkStyle {
		media: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLStyleElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		style: HTMLStyleElement;
	}
}

import type { WindowEventHandlers } from '../mixins';
import type { HTMLElement } from './html-element';

export interface HTMLBodyElement extends HTMLBodyElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLBodyElement {
	export interface Prototype extends HTMLElement.Prototype, WindowEventHandlers {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLBodyElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		body: HTMLBodyElement;
	}
}

import type { HTMLElement } from './html-element';

export interface HTMLSlotElement extends HTMLSlotElement.Interface {}

export namespace HTMLSlotElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLSlotElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		slot: HTMLSlotElement;
	}
}

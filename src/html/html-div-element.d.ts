import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element */
export interface HTMLDivElement extends HTMLDivElement.Interface {}

/** @exposed Window */
export namespace HTMLDivElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLDivElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		div: HTMLDivElement;
	}
}

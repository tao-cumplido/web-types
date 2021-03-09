import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element */
export interface HTMLSpanElement extends HTMLSpanElement.Interface {}

/** @exposed Window */
export namespace HTMLSpanElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLSpanElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		span: HTMLSpanElement;
	}
}

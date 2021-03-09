import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/semantics.html#the-title-element */
export interface HTMLTitleElement extends HTMLTitleElement.Interface {}

/** @exposed Window */
export namespace HTMLTitleElement {
	export interface Prototype extends HTMLElement.Prototype {
		text: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTitleElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		title: HTMLTitleElement;
	}
}

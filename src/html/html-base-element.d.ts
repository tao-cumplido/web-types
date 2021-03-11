import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/semantics.html#the-base-element */
export interface HTMLBaseElement extends HTMLBaseElement.Interface {}

/** @exposed Window */
export namespace HTMLBaseElement {
	export interface Prototype extends HTMLElement.Prototype {
		href: string;
		target: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLBaseElement;
	}
}

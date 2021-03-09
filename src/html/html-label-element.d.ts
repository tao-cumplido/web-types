import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';

/** @spec https://html.spec.whatwg.org/multipage/forms.html#the-label-element */
export interface HTMLLabelElement extends HTMLLabelElement.Interface {}

/** @exposed Window */
export namespace HTMLLabelElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly form: HTMLFormElement | null;
		readonly control: HTMLElement | null;
		htmlFor: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLLabelElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		label: HTMLLabelElement;
	}
}

import type { DOMTokenList, NodeList } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLLabelElement } from './html-label-element';
import type { HTMLFormValidationUtils } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element */
export interface HTMLOutputElement extends HTMLOutputElement.Interface {}

/** @exposed Window */
export namespace HTMLOutputElement {
	export interface Prototype extends HTMLElement.Prototype, HTMLFormValidationUtils {
		/** @putForwards value */
		readonly htmlFor: DOMTokenList;
		readonly form: HTMLFormElement | null;
		readonly type: 'output';
		readonly labels: NodeList<HTMLLabelElement>;

		name: string;
		defaultValue: string;
		value: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLOutputElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		output: HTMLOutputElement;
	}
}

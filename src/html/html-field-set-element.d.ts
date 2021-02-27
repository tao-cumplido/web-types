import type { HTMLCollection } from '../collections';
import type { HTMLFormValidationUtils } from '../mixins';
import type { HTMLButtonElement } from './html-button-element';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLInputElement } from './html-input-element';
import type { HTMLOutputElement } from './html-output-element';
import type { HTMLSelectElement } from './html-select-element';
import type { HTMLTextAreaElement } from './html-text-area-element';

export interface HTMLFieldSetElement extends HTMLFieldSetElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLFieldSetElement {
	export interface Prototype extends HTMLElement.Prototype, HTMLFormValidationUtils {
		readonly form: HTMLFormElement | null;
		readonly type: 'fieldset';
		readonly elements: HTMLCollection<
			| HTMLInputElement
			| HTMLButtonElement
			| HTMLSelectElement
			| HTMLTextAreaElement
			| HTMLOutputElement
			| HTMLFieldSetElement
		>;

		disabled: boolean;
		name: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLFieldSetElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		fieldset: HTMLFieldSetElement;
	}
}
import type { NodeList } from '../collections';
import type { HTMLFormControlUtils, HTMLFormValidationUtils } from '../mixins';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLLabelElement } from './html-label-element';

export interface HTMLButtonElement extends HTMLButtonElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLButtonElement {
	export type Type = 'submit' | 'reset' | 'button';

	export interface Prototype extends HTMLElement.Prototype, HTMLFormControlUtils, HTMLFormValidationUtils {
		readonly form: HTMLFormElement | null;
		readonly labels: NodeList<HTMLLabelElement> | null;

		disabled: boolean;
		name: string;
		type: Type;
		value: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLButtonElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		button: HTMLButtonElement;
	}
}

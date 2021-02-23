import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';

export interface HTMLOptionElement extends HTMLOptionElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLOptionElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly form: HTMLFormElement | null;
		readonly index: number;

		disabled: boolean;
		label: string;
		defaultSelected: boolean;
		selected: boolean;
		value: string;
		text: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLOptionElement;
	}
}

/**
 * @exposed Window
 */
export namespace Option {
	export interface Constructor {
		prototype: HTMLOptionElement.Prototype;
		new (text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		option: HTMLOptionElement;
	}
}

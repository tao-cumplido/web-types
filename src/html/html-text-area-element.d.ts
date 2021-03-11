import type { NodeList } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLLabelElement } from './html-label-element';
import type { HTMLFormInputUtils, HTMLFormTextUtils, HTMLFormValidationUtils } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element */
export interface HTMLTextAreaElement extends HTMLTextAreaElement.Interface {}

/** @exposed Window */
export namespace HTMLTextAreaElement {
	export interface Prototype
		extends HTMLElement.Prototype,
			HTMLFormValidationUtils,
			HTMLFormInputUtils,
			HTMLFormTextUtils<never> {
		readonly form: HTMLFormElement | null;
		readonly labels: NodeList<HTMLLabelElement> | null;

		readonly type: 'textarea';
		readonly textLength: number;

		cols: number;
		rows: number;
		disabled: boolean;
		name: string;
		wrap: string;
		value: string;
		defaultValue: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTextAreaElement;
	}
}

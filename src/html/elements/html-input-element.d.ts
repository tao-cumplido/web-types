import type { NodeList } from '../../collections';
import type { FileList } from '../../file';
import type {
	HTMLFormControlUtils,
	HTMLFormCustomValidationUtils,
	HTMLFormInputUtils,
	HTMLFormTextUtils,
} from '../mixins';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLLabelElement } from './html-label-element';

/** @spec https://html.spec.whatwg.org/multipage/input.html#the-input-element */
export interface HTMLInputElement extends HTMLInputElement.Interface {}

/** @exposed Window */
export namespace HTMLInputElement {
	export type Type =
		| 'hidden'
		| 'text'
		| 'search'
		| 'tel'
		| 'url'
		| 'email'
		| 'password'
		| 'date'
		| 'month'
		| 'week'
		| 'time'
		| 'datetime-local'
		| 'number'
		| 'range'
		| 'color'
		| 'checkbox'
		| 'radio'
		| 'file'
		| 'submit'
		| 'image'
		| 'reset'
		| 'button';

	export interface Prototype
		extends HTMLElement.Prototype,
			HTMLFormControlUtils,
			HTMLFormCustomValidationUtils,
			HTMLFormInputUtils,
			HTMLFormTextUtils<null> {
		readonly form: HTMLFormElement | null;
		readonly labels: NodeList<HTMLLabelElement> | null;
		readonly list: HTMLElement | null;

		accept: string;
		alt: string;
		defaultChecked: boolean;
		checked: boolean;
		disabled: boolean;
		files: FileList | null;
		width: number;
		height: number;
		indeterminate: boolean;
		max: string;
		min: string;
		multiple: boolean;
		pattern: string;
		size: number;
		src: string;
		step: string;
		type: Type;
		name: string;
		value: string;
		defaultValue: string;
		valueAsDate: Date | null;
		valueAsNumber: number;

		stepUp(n?: number): void;
		stepDown(n?: number): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLInputElement;
	}
}

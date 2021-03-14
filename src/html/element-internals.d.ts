import type { NodeList } from '../collections';
import type { ARIAMixin, ShadowRoot } from '../dom';
import type { File } from '../file';
import type { FormData } from '../xhr';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLLabelElement } from './html-label-element';
import type { HTMLFormValidationUtils } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/custom-elements.html#validitystateflags */
export interface ValidityStateFlags {
	valueMissing?: boolean;
	typeMismatch?: boolean;
	patternMismatch?: boolean;
	tooLong?: boolean;
	tooShort?: boolean;
	rangeUnderflow?: boolean;
	rangeOverflow?: boolean;
	stepMismatch?: boolean;
	badInput?: boolean;
	customError?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/custom-elements.html#the-elementinternals-interface */
export interface ElementInternals extends ElementInternals.Interface {}

/** @exposed Window */
export namespace ElementInternals {
	export type FormValue = File | string | FormData | null;

	export interface Prototype extends HTMLFormValidationUtils, ARIAMixin {
		readonly shadowRoot: ShadowRoot | null;
		readonly form: HTMLFormElement | null;
		readonly labels: NodeList<HTMLLabelElement>;

		setFormValue(value: FormValue, state?: FormValue): void;
		setValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

import type { DOMStringMap } from '../collections';
import type { HTMLFormElement } from './html-form-element';
import type { ValidityState } from './validity-state';

/** @spec https://html.spec.whatwg.org/multipage/interaction.html#focusoptions */
export interface FocusOptions {
	preventScroll?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement */
export interface HTMLOrSVGElement {
	readonly dataset: DOMStringMap;
	nonce: string;

	autofocus: boolean;
	tabIndex: number;

	focus(options?: FocusOptions): void;
	blur(): void;
}

/** @spec https://html.spec.whatwg.org/multipage/interaction.html#elementcontenteditable */
export interface ElementContentEditable {
	readonly isContentEditable: boolean;
	contentEditable: '' | `${boolean}` | 'inherit';
	enterKeyHint: '' | 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
	inputMode: '' | 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

/** @spec https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils */
export interface HTMLHyperlinkElementUtils {
	readonly origin: string;
	href: string;
	protocol: string;
	username: string;
	password: string;
	host: string;
	hostname: string;
	port: '' | `${number}`;
	pathname: string;
	search: string;
	hash: string;
}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#selectionmode */
export type SelectionMode = 'select' | 'start' | 'end' | 'preserve';

/** @nonStandard */
export interface HTMLFormControlUtils {
	formAction: string;
	formEnctype: HTMLFormElement.Encoding;
	formMethod: HTMLFormElement.Method;
	formNoValidate: boolean;
	formTarget: string;
}

/** @nonStandard */
export interface HTMLFormValidationUtils {
	readonly willValidate: boolean;
	readonly validity: ValidityState;
	readonly validationMessage: string;

	checkValidity(): boolean;
	reportValidity(): boolean;
	setCustomValidity(error: string): void;
}

/** @nonStandard */
export interface HTMLFormInputUtils {
	autocomplete: string;
	required: boolean;
}

/** @nonStandard */
export interface HTMLFormTextUtils<Optional extends null> {
	dirName: string;
	maxLength: number;
	minLength: number;
	placeholder: string;
	readOnly: boolean;

	selectionStart: number | Optional;
	selectionEnd: number | Optional;
	selectionDirection: string | Optional;

	select(): void;
	setRangeText(replacement: string): void;
	setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
	setSelectionRange(start: number, end: number, direction?: string): void;
}

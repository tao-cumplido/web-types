import type { HTMLFormElement, ValidityState } from '../html';

export interface HTMLFormControlUtils {
	formAction: string;
	formEnctype: HTMLFormElement.Encoding;
	formMethod: HTMLFormElement.Method;
	formNoValidate: boolean;
	formTarget: string;
}

export interface HTMLFormValidationUtils {
	readonly willValidate: boolean;
	readonly validity: ValidityState;
	readonly validationMessage: string;

	checkValidity(): boolean;
	reportValidity(): boolean;
	setCustomValidity(error: string): void;
}

export interface HTMLFormInputUtils {
	autocomplete: string;
	required: boolean;
}

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
	setRangeText(replacement: string, start: number, end: number, selectionMode?: HTMLFormTextUtils.SelectionMode): void;
	setSelectionRange(start: number, end: number, direction?: string): void;
}

export namespace HTMLFormTextUtils {
	export type SelectionMode = 'select' | 'start' | 'end' | 'preserve';
}

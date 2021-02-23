import type { Window } from '../browser';
import type { Document } from '../dom';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { ValidityState } from './validity-state';

export interface HTMLObjectElement extends HTMLObjectElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLObjectElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly form: HTMLFormElement | null;
		readonly contentDocument: Document | null;
		readonly contentWindow: Window.WindowProxy | null;

		readonly willValidate: boolean;
		readonly validity: ValidityState;
		readonly validationMessage: string;

		data: string;
		type: string;
		name: string;
		useMap: string;
		width: string;
		height: string;

		getSVGDocument(): Document | null;

		checkValidity(): boolean;
		reportValidity(): boolean;
		setCustomValidity(error: string): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLObjectElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		object: HTMLObjectElement;
	}
}

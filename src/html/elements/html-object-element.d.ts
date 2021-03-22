import type { Document } from '../../dom';
import type { ValidityState, WindowProxy } from '../window';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLObjectElement-partial
 */
export interface HTMLObjectElement extends HTMLObjectElement.Interface {}

/** @exposed Window */
export namespace HTMLObjectElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly form: HTMLFormElement | null;
		readonly contentDocument: Document.NamedProperties | null;
		readonly contentWindow: WindowProxy | null;

		readonly willValidate: boolean;
		readonly validity: ValidityState;
		readonly validationMessage: string;

		data: string;
		type: string;
		name: string;
		width: string;
		height: string;

		/** @deprecated */
		align: string;
		/** @deprecated */
		archive: string;
		/** @deprecated */
		code: string;
		/** @deprecated */
		declare: boolean;
		/** @deprecated */
		hspace: number;
		/** @deprecated */
		standby: string;
		/** @deprecated */
		vspace: number;
		/** @deprecated */
		codeBase: string;
		/** @deprecated */
		codeType: string;
		/** @deprecated */
		useMap: string;
		/** @deprecated */
		border: string;

		getSVGDocument(): Document.NamedProperties | null;

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
		new(): HTMLObjectElement;
	}
}

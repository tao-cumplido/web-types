import type { DOMTokenList, HTMLFormControlsCollection, RadioNodeList } from '../collections';
import type { Element } from '../dom';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/forms.html#the-form-element */
export interface HTMLFormElement extends HTMLFormElement.Interface {}

/** @exposed Window */
export namespace HTMLFormElement {
	export type Method = 'get' | 'post' | 'dialog';

	export type Encoding = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

	export type LegacyUnenumerableNamedProperties = HTMLFormElement & Record<string, RadioNodeList | Element>;

	export interface Prototype extends HTMLElement.Prototype {
		/** @putForwards value */
		readonly relList: DOMTokenList;
		readonly elements: HTMLFormControlsCollection;
		readonly length: number;

		acceptCharset: string;
		action: string;
		autocomplete: 'on' | 'off';
		enctype: Encoding;
		encoding: Encoding;
		method: Method;
		name: string;
		noValidate: boolean;
		target: string;
		rel: string;

		submit(): void;
		requestSubmit(submitter?: HTMLElement | null): void;
		reset(): void;
		checkValidity(): boolean;
		reportValidity(): boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLFormElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		form: HTMLFormElement;
	}
}

import type { HTMLCollection } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLOptionElement } from './html-option-element';

export interface HTMLDataListElement extends HTMLDataListElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLDataListElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly options: HTMLCollection<HTMLOptionElement>;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLDataListElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		datalist: HTMLDataListElement;
	}
}

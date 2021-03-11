import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/tables.html#the-td-element */
export interface HTMLTableCellElement extends HTMLTableCellElement.Interface {}

/** @exposed Window */
export namespace HTMLTableCellElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly cellIndex: number;

		colSpan: number;
		rowSpan: number;
		headers: string;

		scope: string;
		abbr: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTableCellElement;
	}
}

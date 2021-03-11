import type { HTMLCollection } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLTableRowElement } from './html-table-row-element';

/** @spec https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element */
export interface HTMLTableSectionElement extends HTMLTableSectionElement.Interface {}

/** @exposed Window */
export namespace HTMLTableSectionElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly rows: HTMLCollection<HTMLTableRowElement>;

		insertRow(index?: number): HTMLTableRowElement;
		deleteRow(index: number): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTableSectionElement;
	}
}

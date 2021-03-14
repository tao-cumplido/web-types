import type { HTMLCollection } from '../../collections';
import type { HTMLElement } from './html-element';
import type { HTMLTableCellElement } from './html-table-cell-element';

/** @spec https://html.spec.whatwg.org/multipage/tables.html#the-tr-element */
export interface HTMLTableRowElement extends HTMLTableRowElement.Interface {}

/** @exposed Window */
export namespace HTMLTableRowElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly rowIndex: number;
		readonly sectionRowIndex: number;
		readonly cells: HTMLCollection<HTMLTableCellElement>;

		insertCell(index?: number): HTMLTableCellElement;
		deleteCell(index: number): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTableRowElement;
	}
}

import type { HTMLCollection } from '../../collections';
import type { HTMLElement } from './html-element';
import type { HTMLTableCellElement } from './html-table-cell-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/tables.html#the-tr-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLTableRowElement-partial
 */
export interface HTMLTableRowElement extends HTMLTableRowElement.Interface {}

/** @exposed Window */
export namespace HTMLTableRowElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly rowIndex: number;
		readonly sectionRowIndex: number;
		readonly cells: HTMLCollection<HTMLTableCellElement>;

		/** @deprecated */
		align: string;
		/** @deprecated */
		ch: string;
		/** @deprecated */
		chOff: string;
		/** @deprecated */
		vAlign: string;
		/** @deprecated */
		bgColor: string;

		insertCell(index?: number): HTMLTableCellElement;
		deleteCell(index: number): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLTableRowElement;
	}
}

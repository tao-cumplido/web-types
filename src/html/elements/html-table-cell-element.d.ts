import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/tables.html#the-td-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLTableCellElement-partial
 */
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

		/** @deprecated */
		align: string;
		/** @deprecated */
		axis: string;
		/** @deprecated */
		height: string;
		/** @deprecated */
		width: string;
		/** @deprecated */
		ch: string;
		/** @deprecated */
		chOff: string;
		/** @deprecated */
		noWrap: boolean;
		/** @deprecated */
		vAlign: string;
		/** @deprecated */
		bgColor: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLTableCellElement;
	}
}

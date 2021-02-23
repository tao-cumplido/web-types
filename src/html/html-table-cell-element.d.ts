import type { HTMLElement } from './html-element';

export interface HTMLTableCellElement extends HTMLTableCellElement.Interface {}

/**
 * @exposed Window
 */
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

declare module '@tswt/core' {
	interface HTMLElementMap {
		td: HTMLTableCellElement;
		th: HTMLTableCellElement;
	}
}

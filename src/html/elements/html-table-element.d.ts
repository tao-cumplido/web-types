import type { HTMLCollection } from '../../collections';
import type { HTMLElement } from './html-element';
import type { HTMLTableCaptionElement } from './html-table-caption-element';
import type { HTMLTableRowElement } from './html-table-row-element';
import type { HTMLTableSectionElement } from './html-table-section-element';

/** @spec https://html.spec.whatwg.org/multipage/tables.html#the-table-element */
export interface HTMLTableElement extends HTMLTableElement.Interface {}

/** @exposed Window */
export namespace HTMLTableElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly tBodies: HTMLCollection<HTMLTableSectionElement>;
		readonly rows: HTMLCollection<HTMLTableRowElement>;

		caption: HTMLTableCaptionElement | null;
		tHead: HTMLTableSectionElement | null;
		tFoot: HTMLTableSectionElement | null;

		createCaption(): HTMLTableCaptionElement;
		deleteCaption(): void;
		createTHead(): HTMLTableSectionElement;
		deleteTHead(): void;
		createTFoot(): HTMLTableSectionElement;
		deleteTFoot(): void;
		createTBody(): HTMLTableSectionElement;
		insertRow(index?: number): HTMLTableRowElement;
		deleteRow(index: number): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTableElement;
	}
}

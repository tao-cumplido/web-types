import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLLegendElement-partial
 */
export interface HTMLLegendElement extends HTMLLegendElement.Interface {}

/** @exposed Window */
export namespace HTMLLegendElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly form: HTMLFormElement | null;

		/** @deprecated */
		align: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLLegendElement;
	}
}

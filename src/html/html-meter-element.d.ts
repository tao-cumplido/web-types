import type { NodeList } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLLabelElement } from './html-label-element';

/** @spec https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element */
export interface HTMLMeterElement extends HTMLMeterElement.Interface {}

/** @exposed Window */
export namespace HTMLMeterElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly labels: NodeList<HTMLLabelElement>;
		value: number;
		min: number;
		max: number;
		low: number;
		high: number;
		optimum: number;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLMeterElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		meter: HTMLMeterElement;
	}
}

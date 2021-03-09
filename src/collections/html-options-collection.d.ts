import type { HTMLElement, HTMLOptGroupElement, HTMLOptionElement } from '../html';
import type { HTMLCollection } from './html-collection';

/** @spec https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#the-htmloptionscollection-interface */
export interface HTMLOptionsCollection extends HTMLOptionsCollection.Interface {}

/** @exposed Window */
export namespace HTMLOptionsCollection {
	export type LegacyUnenumerableNamedProperties = HTMLOptionsCollection & Record<string, HTMLOptionElement>;

	// cannot model the index setter in TS https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-setter
	export interface Prototype extends HTMLCollection.Prototype<HTMLOptionElement> {
		length: number;
		selectedIndex: number;
		add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
		remove(index: number): void;
	}

	export type Interface = Prototype & HTMLCollection.Interface<HTMLOptionElement>;

	export interface Static extends HTMLCollection.Static<HTMLOptionElement> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

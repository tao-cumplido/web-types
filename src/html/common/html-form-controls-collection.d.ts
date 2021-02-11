import type { Element, HTMLCollection, NodeList } from '../../nodes';

export interface HTMLFormControlsCollection extends HTMLFormControlsCollection.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLFormControlsCollection {
	export type LegacyUnenumerableNamedProperties = HTMLFormControlsCollection & Record<string, RadioNodeList | Element>;

	// TODO: try to limit elements to listed elements: https://html.spec.whatwg.org/multipage/forms.html#category-listed
	export interface Prototype extends HTMLCollection.Prototype {
		namedItem(name: string): RadioNodeList | Element | null;
		namedItem(name: string): Element | null; // overload necessary to satisfy typescript's inheritance
	}

	export type Interface = Prototype & HTMLCollection.Interface;

	export interface Static extends HTMLCollection.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLFormControlsCollection;
	}
}

export interface RadioNodeList extends RadioNodeList.Interface {}

/**
 * @exposed Window
 */
export namespace RadioNodeList {
	export interface Prototype extends NodeList.Prototype<Element> {
		value: string;
	}

	export type Interface = Prototype & NodeList.Interface<Element>;

	export interface Static extends NodeList.Static<Element> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): RadioNodeList;
	}
}

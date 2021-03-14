import type { ValueOf } from '../@types';
import type { Element } from '../dom';
import type {
	FormAssociatedCustomElementMap,
	HTMLButtonElement,
	HTMLFieldSetElement,
	HTMLInputElement,
	HTMLObjectElement,
	HTMLOutputElement,
	HTMLSelectElement,
	HTMLTextAreaElement,
} from '../html';
import type { HTMLCollection } from './html-collection';
import type { NodeList } from './node-list';

/** @spec https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#the-htmlformcontrolscollection-interface */
export interface HTMLFormControlsCollection extends HTMLFormControlsCollection.Interface {}

/** @exposed Window */
export namespace HTMLFormControlsCollection {
	export type LegacyUnenumerableNamedProperties = HTMLFormControlsCollection & Record<string, RadioNodeList | Element>;

	// https://html.spec.whatwg.org/multipage/forms.html#category-listed
	export type ListedFormElement =
		| HTMLButtonElement
		| HTMLFieldSetElement
		| HTMLInputElement
		| HTMLObjectElement
		| HTMLOutputElement
		| HTMLSelectElement
		| HTMLTextAreaElement
		| ValueOf<FormAssociatedCustomElementMap>;

	export interface Prototype extends HTMLCollection.Prototype<ListedFormElement> {
		namedItem(name: string): RadioNodeList<ListedFormElement> | ListedFormElement | null;
		namedItem(name: string): ListedFormElement | null; // overload necessary to satisfy typescript's inheritance
	}

	export type Interface = Prototype & HTMLCollection.Interface<ListedFormElement>;

	export interface Static extends HTMLCollection.Static<ListedFormElement> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

export interface RadioNodeList<Item extends Element = Element> extends RadioNodeList.Interface<Item> {}

/** @exposed Window */
export namespace RadioNodeList {
	export interface Prototype<Item extends Element = Element> extends NodeList.Prototype<Item> {
		value: string;
	}

	export type Interface<Item extends Element = Element> = Prototype<Item> & NodeList.Interface<Item>;

	export interface Static<Item extends Element = Element> extends NodeList.Static<Item> {
		prototype: Prototype<Item>;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

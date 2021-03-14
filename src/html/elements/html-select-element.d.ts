import type { HTMLCollection, HTMLOptionsCollection, NodeList } from '../../collections';
import type { HTMLFormCustomValidationUtils, HTMLFormInputUtils } from '../mixins';
import type { HTMLElement } from './html-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLLabelElement } from './html-label-element';
import type { HTMLOptionElement } from './html-option-element';

/** @spec https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element */
export interface HTMLSelectElement extends HTMLSelectElement.Interface {}

/** @exposed Window */
export namespace HTMLSelectElement {
	export interface Prototype
		extends HTMLElement.Prototype,
			HTMLFormCustomValidationUtils,
			HTMLFormInputUtils,
			HTMLOptionsCollection /* used like a mixin */ {
		readonly form: HTMLFormElement | null;
		readonly labels: NodeList<HTMLLabelElement> | null;
		readonly options: HTMLOptionsCollection;
		readonly selectedOptions: HTMLCollection<HTMLOptionElement>;

		disabled: boolean;
		multiple: boolean;
		name: string;
		size: number;
		type: 'select-one' | 'select-multiple';

		value: string;

		// overload to match both signatures from ChildNode and HTMLOptionsCollection
		remove(index?: number): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLSelectElement;
	}
}

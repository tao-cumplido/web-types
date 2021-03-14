import type { WindowEventHandlers } from '../../event';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/sections.html#the-body-element */
export interface HTMLBodyElement extends HTMLBodyElement.Interface {}

/** @exposed Window */
export namespace HTMLBodyElement {
	export interface Prototype extends HTMLElement.Prototype, WindowEventHandlers {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLBodyElement;
	}
}

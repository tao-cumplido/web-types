import type { WindowEventHandlers } from '../mixins';
import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/sections.html#the-body-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLBodyElement-partial
 */
export interface HTMLBodyElement extends HTMLBodyElement.Interface {}

/** @exposed Window */
export namespace HTMLBodyElement {
	export interface Prototype extends HTMLElement.Prototype, WindowEventHandlers {
		/** @deprecated */
		text: string;
		/** @deprecated */
		link: string;
		/** @deprecated */
		vLink: string;
		/** @deprecated */
		aLink: string;
		/** @deprecated */
		bgColor: string;
		/** @deprecated */
		background: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLBodyElement;
	}
}

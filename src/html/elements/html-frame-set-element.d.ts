import type { WindowEventHandlers } from '../mixins';
import type { HTMLElement } from './html-element';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#frameset
 */
export interface HTMLFrameSetElement extends HTMLFrameSetElement.Interface {}

/** @exposed Window */
export namespace HTMLFrameSetElement {
	export interface Prototype extends HTMLElement.Prototype, WindowEventHandlers {
		cols: string;
		rows: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/**
		 * @abstract
		 * @deprecated
		 */
		new(): HTMLFrameSetElement;
	}
}

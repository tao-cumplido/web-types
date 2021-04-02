import type { WindowEventHandlers, WindowEventTypes } from '../mixins';
import type { OnErrorEventHandler } from '../types';
import type { HTMLElement } from './html-element';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#frameset
 */
export interface HTMLFrameSetElement extends HTMLFrameSetElement.Interface {}

/** @exposed Window */
export namespace HTMLFrameSetElement {
	export interface Prototype extends HTMLElement.Prototype<WindowEventTypes>, WindowEventHandlers {
		cols: string;
		rows: string;
		onerror: OnErrorEventHandler;
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

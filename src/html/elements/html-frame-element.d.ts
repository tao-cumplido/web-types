import type { Document } from '../../dom';
import type { WindowProxy } from '../window';
import type { HTMLElement } from './html-element';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#htmlframeelement
 */
export interface HTMLFrameElement extends HTMLFrameElement.Interface {}

/** @exposed Window */
export namespace HTMLFrameElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly contentDocument: Document | null;
		readonly contentWindow: WindowProxy | null;

		name: string;
		scrolling: string;
		src: string;
		frameBorder: string;
		longDesc: string;
		noResize: boolean;

		marginHeight: string;
		marginWidth: string;
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
		new(): HTMLFrameElement;
	}
}

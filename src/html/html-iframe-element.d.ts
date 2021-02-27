import type { Window } from '../browser';
import type { DOMTokenList } from '../collections';
import type { Document } from '../dom';
import type { HTMLElement } from './html-element';
import type { HTMLLinkElement } from './html-link-element';

export interface HTMLIFrameElement extends HTMLIFrameElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLIFrameElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @putForwards value */
		readonly sandbox: DOMTokenList;
		readonly contentDocument: Document | null;
		readonly contentWindow: Window.WindowProxy | null;

		src: string;
		srcdoc: string;
		name: string;
		allow: string;
		allowFullscreen: boolean;
		width: string;
		height: string;
		referrerPolicy: HTMLLinkElement.ReferrerPolicy | '';
		loading: HTMLLinkElement.LazyLoadingAttribute;

		getSVGDocument(): Document | null;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLIFrameElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		iframe: HTMLIFrameElement;
	}
}
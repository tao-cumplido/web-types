import type { Window } from '../../browser';
import type { DOMTokenList } from '../../collections';
import type { Document } from '../../dom';
import type { HTMLElement } from './html-element';
import type { HTMLLinkElement } from './html-link-element';

/** @spec https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element */
export interface HTMLIFrameElement extends HTMLIFrameElement.Interface {}

/** @exposed Window */
export namespace HTMLIFrameElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @putForwards value */
		readonly sandbox: DOMTokenList;
		readonly contentDocument: Document.NamedProperties | null;
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

		getSVGDocument(): Document.NamedProperties | null;
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

import type { DOMTokenList } from '../../collections';
import type { Document } from '../../dom';
import type { ReferrerPolicy } from '../../fetch';
import type { LazyLoadingAttribute } from '../types';
import type { WindowProxy } from '../window';
import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLIFrameElement-partial
 */
export interface HTMLIFrameElement extends HTMLIFrameElement.Interface {}

/** @exposed Window */
export namespace HTMLIFrameElement {
	export interface Prototype extends HTMLElement.Prototype {
		/** @putForwards value */
		readonly sandbox: DOMTokenList;
		readonly contentDocument: Document.NamedProperties | null;
		readonly contentWindow: WindowProxy | null;

		src: string;
		srcdoc: string;
		name: string;
		allow: string;
		allowFullscreen: boolean;
		width: string;
		height: string;
		referrerPolicy: ReferrerPolicy;
		loading: LazyLoadingAttribute;

		/** @deprecated */
		align: string;
		/** @deprecated */
		scrolling: string;
		/** @deprecated */
		frameBorder: string;
		/** @deprecated */
		longDesc: string;
		/** @deprecated */
		marginHeight: string;
		/** @deprecated */
		marginWidth: string;

		getSVGDocument(): Document.NamedProperties | null;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLIFrameElement;
	}
}

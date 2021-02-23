import type { DOMTokenList } from '../collections';
import type { HTMLHyperlinkElementUtils } from '../mixins';
import type { HTMLElement } from './html-element';
import type { HTMLLinkElement } from './html-link-element';

export interface HTMLAnchorElement extends HTMLAnchorElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLAnchorElement {
	export interface Prototype extends HTMLElement.Prototype, HTMLHyperlinkElementUtils {
		/** @putForwards value */
		readonly relList: DOMTokenList;

		target: string;
		download: string;
		ping: string;
		rel: string;
		hreflang: string;
		type: string;

		text: string;

		referrerPolicy: HTMLLinkElement.ReferrerPolicy | '';
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLAnchorElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		a: HTMLAnchorElement;
	}
}

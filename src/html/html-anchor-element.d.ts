import type { DOMTokenList } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLLinkElement } from './html-link-element';
import type { HTMLHyperlinkElementUtils } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element */
export interface HTMLAnchorElement extends HTMLAnchorElement.Interface {}

/** @exposed Window */
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

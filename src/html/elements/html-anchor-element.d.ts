import type { DOMTokenList } from '../../collections';
import type { ReferrerPolicy } from '../../fetch';
import type { HTMLHyperlinkElementUtils } from '../mixins';
import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLAnchorElement-partial
 */
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

		referrerPolicy: ReferrerPolicy;

		/** @deprecated */
		coords: string;
		/** @deprecated */
		charset: string;
		/** @deprecated */
		name: string;
		/** @deprecated */
		rev: string;
		/** @deprecated */
		shape: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLAnchorElement;
	}
}

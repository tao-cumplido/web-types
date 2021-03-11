import type { DOMTokenList } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLLinkElement } from './html-link-element';
import type { HTMLHyperlinkElementUtils } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element */
export interface HTMLAreaElement extends HTMLAreaElement.Interface {}

/** @exposed Window */
export namespace HTMLAreaElement {
	export interface Prototype extends HTMLElement.Prototype, HTMLHyperlinkElementUtils {
		/** @putForwards value */
		readonly relList: DOMTokenList;

		alt: string;
		coords: string;
		shape: string;
		target: string;
		download: string;
		ping: string;
		rel: string;
		referrerPolicy: HTMLLinkElement.ReferrerPolicy | '';
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLAreaElement;
	}
}

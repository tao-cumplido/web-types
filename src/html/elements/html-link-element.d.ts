import type { DOMTokenList } from '../../collections';
import type { LinkStyle } from '../../css';
import type { PotentialDestination, ReferrerPolicy } from '../../fetch';
import type { CORSSettingsAttribute } from '../types';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/semantics.html#the-link-element */
export interface HTMLLinkElement extends HTMLLinkElement.Interface {}

/** @exposed Window */
export namespace HTMLLinkElement {
	export interface Prototype extends HTMLElement.Prototype, LinkStyle {
		/** @putForwards value */
		readonly relList: DOMTokenList;
		/** @putForwards value */
		readonly sizes: DOMTokenList;

		href: string;
		crossOrigin: CORSSettingsAttribute | null;
		rel: string;
		as: PotentialDestination | '';
		media: string;
		integrity: string;
		hreflang: string;
		type: string;
		imageSrcset: string;
		imageSizes: string;
		referrerPolicy: ReferrerPolicy;
		disabled: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLLinkElement;
	}
}

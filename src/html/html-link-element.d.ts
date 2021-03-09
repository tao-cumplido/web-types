import type { DOMTokenList } from '../collections';
import type { LinkStyle } from '../css';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/semantics.html#the-link-element */
export interface HTMLLinkElement extends HTMLLinkElement.Interface {}

/** @exposed Window */
export namespace HTMLLinkElement {
	// TODO: place types in fetch namespace
	export type ReferrerPolicy =
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'same-origin'
		| 'origin'
		| 'strict-origin'
		| 'origin-when-cross-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';

	export type PotentialDestination =
		| 'fetch'
		| 'report'
		| 'document'
		| 'frame'
		| 'iframe'
		| 'object'
		| 'embed'
		| 'audio'
		| 'font'
		| 'image'
		| 'audioworklet'
		| 'paintworklet'
		| 'script'
		| 'serviceworker'
		| 'sharedworker'
		| 'worker'
		| 'style'
		| 'track'
		| 'video'
		| 'image'
		| 'manifest'
		| 'xslt';

	export type CORSSettingsAttribute = 'anonymous' | 'use-credentials';

	export type LazyLoadingAttribute = 'lazy' | 'eager';

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
		referrerPolicy: ReferrerPolicy | '';
		disabled: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLLinkElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		link: HTMLLinkElement;
	}
}

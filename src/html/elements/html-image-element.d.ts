import type { ReferrerPolicy } from '../../fetch';
import type { CORSSettingsAttribute, LazyLoadingAttribute } from '../types';
import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLImageElement-partial
 * @spec https://drafts.csswg.org/cssom-view-1/#extensions-to-the-htmlimageelement-interface
 */
export interface HTMLImageElement extends HTMLImageElement.Interface {}

/** @exposed Window */
export namespace HTMLImageElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly naturalWidth: number;
		readonly naturalHeight: number;
		readonly complete: boolean;
		readonly currentSrc: string;

		readonly x: number;
		readonly y: number;

		alt: string;
		src: string;
		srcset: string;
		sizes: string;
		crossOrigin: CORSSettingsAttribute | null;
		useMap: string;
		isMap: boolean;
		width: number;
		height: number;
		referrerPolicy: ReferrerPolicy;
		decoding: 'sync' | 'async' | 'auto';
		loading: LazyLoadingAttribute;

		/** @deprecated */
		name: string;
		/** @deprecated */
		lowsrc: string;
		/** @deprecated */
		align: string;
		/** @deprecated */
		hspace: number;
		/** @deprecated */
		vspace: number;
		/** @deprecated */
		longDesc: string;
		/** @deprecated */
		border: string;

		decode(): Promise<void>;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLImageElement;
	}
}

/** @exposed Window */
export namespace Image {
	export interface Constructor {
		prototype: HTMLImageElement.Prototype;
		/** @deprecated */
		new(width?: number, height?: number): HTMLImageElement;
	}
}

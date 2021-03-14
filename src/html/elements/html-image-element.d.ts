import type { HTMLElement } from './html-element';
import type { HTMLLinkElement } from './html-link-element';

/** @spec */
export interface HTMLImageElement extends HTMLImageElement.Interface {}

/** @exposed Window */
export namespace HTMLImageElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly naturalWidth: number;
		readonly naturalHeight: number;
		readonly complete: boolean;
		readonly currentSrc: string;

		alt: string;
		src: string;
		srcset: string;
		sizes: string;
		crossOrigin: HTMLLinkElement.CORSSettingsAttribute | null;
		useMap: string;
		isMap: boolean;
		width: number;
		height: number;
		referrerPolicy: HTMLLinkElement.ReferrerPolicy | '';
		decoding: 'sync' | 'async' | 'auto';
		loading: HTMLLinkElement.LazyLoadingAttribute;

		decode(): Promise<void>;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLImageElement;
	}
}

/** @exposed Window */
export namespace Image {
	export interface Constructor {
		prototype: HTMLImageElement.Prototype;
		/** @deprecated */
		new (width?: number, height?: number): HTMLImageElement;
	}
}

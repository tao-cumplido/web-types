import type { HTMLMediaElement } from './html-media-element';

/** @spec https://html.spec.whatwg.org/multipage/media.html#the-video-element */
export interface HTMLVideoElement extends HTMLVideoElement.Interface {}

/** @exposed Window */
export namespace HTMLVideoElement {
	export interface Prototype extends HTMLMediaElement.Prototype {
		readonly videoWidth: number;
		readonly videoHeight: number;

		width: number;
		height: number;
		poster: string;
		playsInline: boolean;
	}

	export type Interface = Prototype & HTMLMediaElement.Interface;

	export interface Static extends HTMLMediaElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLVideoElement;
	}
}

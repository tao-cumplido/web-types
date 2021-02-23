import type { HTMLMediaElement } from './html-media-element';

export interface HTMLAudioElement extends HTMLAudioElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLAudioElement {
	export interface Prototype extends HTMLMediaElement.Prototype {}

	export type Interface = Prototype & HTMLMediaElement.Interface;

	export interface Static extends HTMLMediaElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLAudioElement;
	}
}

/**
 * @exposed Window
 */
export namespace Audio {
	export interface Constructor {
		prototype: HTMLAudioElement.Prototype;
		/** @deprecated */
		new (src?: string): HTMLAudioElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		video: HTMLAudioElement;
	}
}

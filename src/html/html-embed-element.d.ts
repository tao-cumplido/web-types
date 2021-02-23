import type { Document } from '../dom';
import type { HTMLElement } from './html-element';

export interface HTMLEmbedElement extends HTMLEmbedElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLEmbedElement {
	export interface Prototype extends HTMLElement.Prototype {
		src: string;
		type: string;
		width: string;
		height: string;

		getSVGDocument(): Document | null;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLEmbedElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		embed: HTMLEmbedElement;
	}
}

import type { Document } from '../../dom';
import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLEmbedElement-partial
 */
export interface HTMLEmbedElement extends HTMLEmbedElement.Interface {}

/** @exposed Window */
export namespace HTMLEmbedElement {
	export interface Prototype extends HTMLElement.Prototype {
		src: string;
		type: string;
		width: string;
		height: string;

		/** @deprecated */
		align: string;
		/** @deprecated */
		name: string;

		getSVGDocument(): Document.NamedProperties | null;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLEmbedElement;
	}
}

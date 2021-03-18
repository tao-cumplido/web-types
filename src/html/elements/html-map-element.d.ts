import type { HTMLCollection } from '../../collections';
import type { HTMLAreaElement } from './html-area-element';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element */
export interface HTMLMapElement extends HTMLMapElement.Interface {}

/** @exposed Window */
export namespace HTMLMapElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly areas: HTMLCollection<HTMLAreaElement>;
		name: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLMapElement;
	}
}

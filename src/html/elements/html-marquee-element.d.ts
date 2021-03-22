import type { HTMLElement } from './html-element';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#the-marquee-element
 */
export interface HTMLMarqueeElement extends HTMLMarqueeElement.Interface {}

/** @exposed Window */
export namespace HTMLMarqueeElement {
	export interface Prototype extends HTMLElement.Prototype {
		behavior: string;
		bgColor: string;
		direction: string;
		height: string;
		hspace: number;
		loop: number;
		scrollAmount: number;
		scrollDelay: number;
		trueSpeed: boolean;
		vspace: number;
		width: string;

		start(): void;
		stop(): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/**
		 * @abstract
		 * @deprecated
		 */
		new(): HTMLMarqueeElement;
	}
}

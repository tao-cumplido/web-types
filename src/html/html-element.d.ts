import type { ElementCSSInlineStyle } from '../css';
import type { Element } from '../dom';
import type { DocumentAndElementEventHandlers, GlobalEventHandlers } from '../event';
import type { ElementInternals } from './element-internals';
import type { ElementContentEditable, HTMLOrSVGElement } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/dom.html#htmlelement */
export interface HTMLElement extends HTMLElement.Interface {}

/** @exposed Window */
export namespace HTMLElement {
	export type Directionality = '' | 'ltr' | 'rtl' | 'auto';

	export interface Prototype
		extends Element.Prototype,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers,
			ElementContentEditable,
			HTMLOrSVGElement,
			ElementCSSInlineStyle {
		readonly accessKeyLabel: string;

		title: string;
		lang: string;
		translate: boolean;
		dir: Directionality;

		hidden: boolean;
		accessKey: string;
		draggable: boolean;
		spellcheck: boolean;
		autocapitalize: string;

		innerText: string;

		click(): void;

		attachInternals(): ElementInternals;
	}

	export type Interface = Prototype & Element.Interface;

	export interface Static extends Element.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLElement;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement */
export interface HTMLUnknownElement extends HTMLUnknownElement.Interface {}

/** @exposed Window */
export namespace HTMLUnknownElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		applet: HTMLUnknownElement;
		bgsound: HTMLUnknownElement;
		blink: HTMLUnknownElement;
		isindex: HTMLUnknownElement;
		keygen: HTMLUnknownElement;
		multicol: HTMLUnknownElement;
		nextid: HTMLUnknownElement;
		spacer: HTMLUnknownElement;
		acronym: HTMLElement;
		basefont: HTMLElement;
		big: HTMLElement;
		center: HTMLElement;
		nobr: HTMLElement;
		noembed: HTMLElement;
		noframes: HTMLElement;
		plaintext: HTMLElement;
		rb: HTMLElement;
		rtc: HTMLElement;
		strike: HTMLElement;
		tt: HTMLElement;
		article: HTMLElement;
		section: HTMLElement;
		nav: HTMLElement;
		aside: HTMLElement;
		hgroup: HTMLElement;
		header: HTMLElement;
		footer: HTMLElement;
		address: HTMLElement;
		dt: HTMLElement;
		dd: HTMLElement;
		figure: HTMLElement;
		figcaption: HTMLElement;
		main: HTMLElement;
		em: HTMLElement;
		strong: HTMLElement;
		small: HTMLElement;
		s: HTMLElement;
		cite: HTMLElement;
		dfn: HTMLElement;
		abbr: HTMLElement;
		ruby: HTMLElement;
		rt: HTMLElement;
		rp: HTMLElement;
		code: HTMLElement;
		var: HTMLElement;
		samp: HTMLElement;
		kbd: HTMLElement;
		sub: HTMLElement;
		sup: HTMLElement;
		i: HTMLElement;
		b: HTMLElement;
		u: HTMLElement;
		mark: HTMLElement;
		bdi: HTMLElement;
		bdo: HTMLElement;
		wbr: HTMLElement;
		summary: HTMLElement;
		noscript: HTMLElement;
	}
}

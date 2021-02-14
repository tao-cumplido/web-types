import type { ElementContentEditable } from '../../mixins';
import type { HTMLOrSVGElement } from '../../mixins/html-or-svg-element';
import type { Element } from '../../nodes';
import type { DocumentAndElementEventHandlers, GlobalEventHandlers } from '../web-application-apis';
import type { ElementInternals } from './element-internals';

export interface HTMLElement extends HTMLElement.Interface {}

export namespace HTMLElement {
	export interface Prototype
		extends Element.Prototype,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers,
			ElementContentEditable,
			HTMLOrSVGElement {
		readonly accessKeyLabel: string;

		title: string;
		lang: string;
		translate: boolean;
		dir: '' | 'ltr' | 'rtl' | 'auto';

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

export interface HTMLUnknownElement extends HTMLUnknownElement.Interface {}

export namespace HTMLUnknownElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {}
}

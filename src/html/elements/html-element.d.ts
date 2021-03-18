import type { ElementCSSInlineStyle } from '../../css';
import type { Element } from '../../dom';
import type { ElementInternals } from '../element-internals';
import type {
	DocumentAndElementEventHandlers,
	ElementContentEditable,
	GlobalEventHandlers,
	HTMLOrSVGElement,
} from '../mixins';

/** @spec https://html.spec.whatwg.org/multipage/dom.html#htmlelement */
export interface HTMLElement extends HTMLElement.Interface {}

/** @exposed Window */
export namespace HTMLElement {
	export type Directionality = '' | 'ltr' | 'rtl' | 'auto';

	export interface Prototype
		extends
			Element.Prototype,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers,
			ElementContentEditable,
			HTMLOrSVGElement,
			ElementCSSInlineStyle
	{
		readonly accessKeyLabel: string;

		title: string;
		lang: string;
		translate: boolean;
		dir: Directionality;

		hidden: boolean;
		accessKey: string;
		draggable: boolean;
		spellcheck: boolean;
		autocapitalize: '' | 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

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
		new(): HTMLElement;
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
		new(): never;
	}
}

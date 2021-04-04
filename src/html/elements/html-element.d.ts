import type { ElementCSSInlineStyle } from '../../css';
import type { Element, Event } from '../../dom';
import type {
	DocumentAndElementEventHandlers,
	DocumentAndElementEventTypes,
	ElementContentEditable,
	GlobalEventHandlers,
	GlobalEventTypes,
	HTMLOrSVGElement,
} from '../mixins';
import type { ElementInternals } from '../window';

/**
 * @spec https://html.spec.whatwg.org/multipage/dom.html#htmlelement
 * @spec https://drafts.csswg.org/cssom-view-1/#extensions-to-the-htmlelement-interface
 */
export interface HTMLElement extends HTMLElement.Interface {}

/** @exposed Window */
export namespace HTMLElement {
	export type Directionality = '' | 'ltr' | 'rtl' | 'auto';

	export interface Prototype<EventMap extends Record<keyof EventMap, Event> = Record<never, never>>
		extends
			Element.Prototype<EventMap & GlobalEventTypes & DocumentAndElementEventTypes>,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers,
			ElementContentEditable,
			HTMLOrSVGElement,
			ElementCSSInlineStyle
	{
		readonly accessKeyLabel: string;

		readonly offsetParent: Element | null;
		readonly offsetTop: number;
		readonly offsetLeft: number;
		readonly offsetWidth: number;
		readonly offsetHeight: number;

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

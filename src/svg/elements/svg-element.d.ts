import type { ElementCSSInlineStyle } from '../../css';
import type { Element, Event } from '../../dom';
import type {
	DocumentAndElementEventHandlers,
	DocumentAndElementEventTypes,
	GlobalEventHandlers,
	GlobalEventTypes,
	HTMLOrSVGElement,
} from '../../html';
import type { SVGElementInstance } from '../mixins';
import type { SVGSVGElement } from './svg-svg-element';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGElement */
export interface SVGElement extends SVGElement.Interface {}

/** @exposed Window */
export namespace SVGElement {
	export interface Prototype<EventMap extends Record<keyof EventMap, Event> = Record<never, never>>
		extends
			Element.Prototype<EventMap & GlobalEventTypes & DocumentAndElementEventTypes>,
			ElementCSSInlineStyle,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers,
			HTMLOrSVGElement,
			SVGElementInstance
	{
		readonly ownerSVGElement: SVGSVGElement | null;
		readonly viewportElement: SVGElement | null;

		/** @deprecated */
		readonly className: never; // is actually SVGAnimatedString which TS's inheritance won't allow
	}

	export type Interface = Prototype & Element.Interface;

	export interface Static extends Element.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

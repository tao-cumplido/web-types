import type { ElementCSSInlineStyle } from '../css';
import type { Element } from '../dom';

/** @spec https://www.w3.org/TR/SVG2/types.html#InterfaceSVGElement */
export interface SVGElement extends SVGElement.Interface {}

export namespace SVGElement {
	export interface Prototype extends Element.Prototype, ElementCSSInlineStyle {
		// TODO
	}

	export type Interface = Prototype & Element.Interface;

	export interface Static extends Element.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

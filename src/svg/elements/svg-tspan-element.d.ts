import type { SVGTextPositioningElement } from './svg-text-positioning-element';

/** @spec https://svgwg.org/svg2-draft/text.html#InterfaceSVGTSpanElement */
export interface SVGTSpanElement extends SVGTSpanElement.Interface {}

/** @exposed Window */
export namespace SVGTSpanElement {
	export interface Prototype extends SVGTextPositioningElement.Prototype {}

	export type Interface = Prototype & SVGTextPositioningElement.Interface;

	export interface Static extends SVGTextPositioningElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

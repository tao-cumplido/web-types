import type { SVGTextPositioningElement } from './svg-text-positioning-element';

/** @spec https://svgwg.org/svg2-draft/text.html#InterfaceSVGTextElement */
export interface SVGTextElement extends SVGTextElement.Interface {}

/** @exposed Window */
export namespace SVGTextElement {
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

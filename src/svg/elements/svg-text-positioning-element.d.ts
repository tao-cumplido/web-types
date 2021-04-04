import type { SVGAnimatedLengthList } from '../svg-animated-length-list';
import type { SVGAnimatedNumberList } from '../svg-animated-number-list';
import type { SVGTextContentElement } from './svg-text-content-element';

/** @spec https://svgwg.org/svg2-draft/text.html#InterfaceSVGTextPositioningElement */
export interface SVGTextPositioningElement extends SVGTextPositioningElement.Interface {}

/** @exposed Window */
export namespace SVGTextPositioningElement {
	export interface Prototype extends SVGTextContentElement.Prototype {
		readonly x: SVGAnimatedLengthList;
		readonly y: SVGAnimatedLengthList;
		readonly dx: SVGAnimatedLengthList;
		readonly dy: SVGAnimatedLengthList;
		readonly rotate: SVGAnimatedNumberList;
	}

	export type Interface = Prototype & SVGTextContentElement.Interface;

	export interface Static extends SVGTextContentElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

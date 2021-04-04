import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGradientElement } from './svg-gradient-element';

/** @spec https://svgwg.org/svg2-draft/pservers.html#InterfaceSVGLinearGradientElement */
export interface SVGLinearGradientElement extends SVGLinearGradientElement.Interface {}

/** @exposed Window */
export namespace SVGLinearGradientElement {
	export interface Prototype extends SVGGradientElement.Prototype {
		readonly x1: SVGAnimatedLength;
		readonly y1: SVGAnimatedLength;
		readonly x2: SVGAnimatedLength;
		readonly y2: SVGAnimatedLength;
	}

	export type Interface = Prototype & SVGGradientElement.Interface;

	export interface Static extends SVGGradientElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

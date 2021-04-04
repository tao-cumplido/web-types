import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGradientElement } from './svg-gradient-element';

/** @spec https://svgwg.org/svg2-draft/pservers.html#InterfaceSVGRadialGradientElement */
export interface SVGRadialGradientElement extends SVGRadialGradientElement.Interface {}

/** @exposed Window */
export namespace SVGRadialGradientElement {
	export interface Prototype extends SVGGradientElement.Prototype {
		readonly cx: SVGAnimatedLength;
		readonly cy: SVGAnimatedLength;
		readonly r: SVGAnimatedLength;
		readonly fx: SVGAnimatedLength;
		readonly fy: SVGAnimatedLength;
		readonly fr: SVGAnimatedLength;
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

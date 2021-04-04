import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGeometryElement } from './svg-geometry-element';

/** @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGCircleElement */
export interface SVGCircleElement extends SVGCircleElement.Interface {}

/** @exposed Window */
export namespace SVGCircleElement {
	export interface Prototype extends SVGGeometryElement.Prototype {
		readonly cx: SVGAnimatedLength;
		readonly cy: SVGAnimatedLength;
		readonly r: SVGAnimatedLength;
	}

	export type Interface = Prototype & SVGGeometryElement.Interface;

	export interface Static extends SVGGeometryElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGeometryElement } from './svg-geometry-element';

/** @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGLineElement */
export interface SVGLineElement extends SVGLineElement.Interface {}

/** @exposed Window */
export namespace SVGLineElement {
	export interface Prototype extends SVGGeometryElement.Prototype {
		readonly x1: SVGAnimatedLength;
		readonly y1: SVGAnimatedLength;
		readonly x2: SVGAnimatedLength;
		readonly y2: SVGAnimatedLength;
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

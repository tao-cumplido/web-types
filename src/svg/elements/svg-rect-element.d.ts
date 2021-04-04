import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGeometryElement } from './svg-geometry-element';

/** @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGRectElement */
export interface SVGRectElement extends SVGRectElement.Interface {}

/** @exposed Window */
export namespace SVGRectElement {
	export interface Prototype extends SVGGeometryElement.Prototype {
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;
		readonly rx: SVGAnimatedLength;
		readonly ry: SVGAnimatedLength;
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

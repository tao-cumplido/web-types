import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGeometryElement } from './svg-geometry-element';

/** @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGEllipseElement */
export interface SVGEllipseElement extends SVGEllipseElement.Interface {}

/** @exposed Window */
export namespace SVGEllipseElement {
	export interface Prototype extends SVGGeometryElement.Prototype {
		readonly cx: SVGAnimatedLength;
		readonly cy: SVGAnimatedLength;
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

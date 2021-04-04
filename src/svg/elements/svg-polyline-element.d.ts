import type { SVGAnimatedPoints } from '../mixins';
import type { SVGGeometryElement } from './svg-geometry-element';

/** @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGPolylineElement */
export interface SVGPolylineElement extends SVGPolylineElement.Interface {}

/** @exposed Window */
export namespace SVGPolylineElement {
	export interface Prototype extends SVGGeometryElement.Prototype, SVGAnimatedPoints {}

	export type Interface = Prototype & SVGGeometryElement.Interface;

	export interface Static extends SVGGeometryElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

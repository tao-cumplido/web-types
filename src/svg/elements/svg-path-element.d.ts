import type { SVGGeometryElement } from './svg-geometry-element';

/** @spec https://svgwg.org/svg2-draft/paths.html#InterfaceSVGPathElement */
export interface SVGPathElement extends SVGPathElement.Interface {}

/** @exposed Window */
export namespace SVGPathElement {
	export interface Prototype extends SVGGeometryElement.Prototype {}

	export type Interface = Prototype & SVGGeometryElement.Interface;

	export interface Static extends SVGGeometryElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

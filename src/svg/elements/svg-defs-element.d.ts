import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGDefsElement */
export interface SVGDefsElement extends SVGDefsElement.Interface {}

/** @exposed Window */
export namespace SVGDefsElement {
	export interface Prototype extends SVGGraphicsElement.Prototype {}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

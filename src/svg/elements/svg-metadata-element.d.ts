import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGMetadataElement */
export interface SVGMetadataElement extends SVGMetadataElement.Interface {}

/** @exposed Window */
export namespace SVGMetadataElement {
	export interface Prototype extends SVGElement.Prototype {}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

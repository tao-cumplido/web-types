import type { SVGElement } from './svg-element';

/** @spec https://www.w3.org/TR/SVG2/types.html#InterfaceSVGGraphicsElement */
export interface SVGGraphicsElement extends SVGGraphicsElement.Interface {}

export namespace SVGGraphicsElement {
	export interface Prototype extends SVGElement.Prototype {
		// TODO
	}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

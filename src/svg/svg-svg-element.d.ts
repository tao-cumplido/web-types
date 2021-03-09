import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://www.w3.org/TR/SVG2/struct.html#InterfaceSVGSVGElement */
export interface SVGSVGElement extends SVGSVGElement.Interface {}

export namespace SVGSVGElement {
	export interface Prototype extends SVGGraphicsElement.Prototype {
		// TODO
	}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

declare module '@tswt/core' {
	interface SVGElementMap {
		svg: SVGSVGElement;
	}
}

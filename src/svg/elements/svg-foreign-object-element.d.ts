import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/embedded.html#InterfaceSVGForeignObjectElement */
export interface SVGForeignObjectElement extends SVGForeignObjectElement.Interface {}

/** @exposed Window */
export namespace SVGForeignObjectElement {
	export interface Prototype extends SVGGraphicsElement.Prototype {
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;
	}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

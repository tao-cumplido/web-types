import type { SVGFitToViewBox } from '../mixins';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGSymbolElement */
export interface SVGSymbolElement extends SVGSymbolElement.Interface {}

/** @exposed Window */
export namespace SVGSymbolElement {
	export interface Prototype extends SVGGraphicsElement.Prototype, SVGFitToViewBox {}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

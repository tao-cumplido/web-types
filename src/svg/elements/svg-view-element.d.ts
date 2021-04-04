import type { SVGFitToViewBox } from '../mixins';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/linking.html#InterfaceSVGViewElement */
export interface SVGViewElement extends SVGViewElement.Interface {}

/** @exposed Window */
export namespace SVGViewElement {
	export interface Prototype extends SVGElement.Prototype, SVGFitToViewBox {}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

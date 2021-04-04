import type { SVGAnimatedNumber } from '../svg-animated-number';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/pservers.html#InterfaceSVGStopElement */
export interface SVGStopElement extends SVGStopElement.Interface {}

/** @exposed Window */
export namespace SVGStopElement {
	export interface Prototype extends SVGElement.Prototype {
		readonly offset: SVGAnimatedNumber;
	}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

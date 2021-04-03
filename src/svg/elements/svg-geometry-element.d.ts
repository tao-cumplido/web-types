import type { DOMPoint, DOMPointInit } from '../../geometry';
import type { SVGAnimatedNumber } from '../svg-animated-number';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGGeometryElement */
export interface SVGGeometryElement extends SVGGeometryElement.Interface {}

/** @exposed Window */
export namespace SVGGeometryElement {
	export interface Prototype extends SVGGraphicsElement.Prototype {
		readonly pathLength: SVGAnimatedNumber;

		isPointInFill(point?: DOMPointInit): boolean;
		isPointInStroke(point?: DOMPointInit): boolean;
		getTotalLength(): number;
		getPointAtLength(distance: number): DOMPoint;
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

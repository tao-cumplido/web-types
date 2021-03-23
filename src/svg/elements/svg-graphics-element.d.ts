import type { DOMMatrix, DOMRect } from '../../geometry';
import type { SVGTests } from '../mixins';
import type { SVGAnimatedTransformList } from '../svg-animated-transform-list';
import type { SVGElement } from './svg-element';

/**
 * @idlType
 * @spec https://svgwg.org/svg2-draft/types.html#SVGBoundingBoxOptions
 */
export interface SVGBoundingBoxOptions {
	fill?: boolean;
	stroke?: boolean;
	markers?: boolean;
	clipped?: boolean;
}

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGGraphicsElement */
export interface SVGGraphicsElement extends SVGGraphicsElement.Interface {}

/** @exposed Window */
export namespace SVGGraphicsElement {
	export interface Prototype extends SVGElement.Prototype, SVGTests {
		readonly transform: SVGAnimatedTransformList;

		getBBox(options?: SVGBoundingBoxOptions): DOMRect;
		getCTM(): DOMMatrix | null;
		getScreenCTM(): DOMMatrix | null;
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

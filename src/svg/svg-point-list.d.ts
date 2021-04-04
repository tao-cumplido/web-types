import type { DOMPoint } from '../geometry';
import type { SVGList } from './mixins';

/** @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGPointList */
export interface SVGPointList extends SVGPointList.Interface {}

/** @exposed Window */
export namespace SVGPointList {
	export interface Prototype extends SVGList<DOMPoint> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

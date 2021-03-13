import type { DOMMatrix2DInit } from '../geometry';
import type { SVGList } from './mixins';
import type { SVGTransform } from './svg-transform';

/** @spec https://svgwg.org/svg2-draft/coords.html#InterfaceSVGTransformList */
export interface SVGTransformList extends SVGTransformList.Interface {}

/** @exposed Window */
export namespace SVGTransformList {
	export interface Prototype extends SVGList<SVGTransform> {
		createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
		consolidate(): SVGTransform | null;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

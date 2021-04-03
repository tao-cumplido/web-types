import type { SVGList } from './mixins';
import type { SVGLength } from './svg-length';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGLengthList */
export interface SVGLengthList extends SVGLengthList.Interface {}

/** @exposed Window */
export namespace SVGLengthList {
	export interface Prototype extends SVGList<SVGLength> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

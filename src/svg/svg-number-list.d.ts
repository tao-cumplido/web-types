import type { SVGList } from './mixins';
import type { SVGNumber } from './svg-number';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGNumberList */
export interface SVGNumberList extends SVGNumberList.Interface {}

/** @exposed Window */
export namespace SVGNumberList {
	export interface Prototype extends SVGList<SVGNumber> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

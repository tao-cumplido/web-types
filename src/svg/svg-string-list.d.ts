import type { SVGList } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGStringList */
export interface SVGStringList extends SVGStringList.Interface {}

/** @exposed Window */
export namespace SVGStringList {
	export interface Prototype extends SVGList<string> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

import type { SVGAnimatedMutable } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration */
export interface SVGAnimatedEnumeration extends SVGAnimatedEnumeration.Interface {}

/** @exposed Window */
export namespace SVGAnimatedEnumeration {
	export interface Prototype extends SVGAnimatedMutable<number> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

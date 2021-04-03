import type { SVGAnimatedMutable } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber */
export interface SVGAnimatedNumber extends SVGAnimatedNumber.Interface {}

/** @exposed Window */
export namespace SVGAnimatedNumber {
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

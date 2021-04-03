import type { SVGAnimatedMutable } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger */
export interface SVGAnimatedInteger extends SVGAnimatedInteger.Interface {}

/** @exposed Window */
export namespace SVGAnimatedInteger {
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

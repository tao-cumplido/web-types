import type { SVGAnimatedMutable } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedBoolean */
export interface SVGAnimatedBoolean extends SVGAnimatedBoolean.Interface {}

/** @exposed Window */
export namespace SVGAnimatedBoolean {
	export interface Prototype extends SVGAnimatedMutable<boolean> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

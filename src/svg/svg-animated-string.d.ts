import type { SVGAnimatedMutable } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString */
export interface SVGAnimatedString extends SVGAnimatedString.Interface {}

/** @exposed Window */
export namespace SVGAnimatedString {
	export interface Prototype extends SVGAnimatedMutable<string> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

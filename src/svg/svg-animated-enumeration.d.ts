import type { SVGAnimatedMutable } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration */
export interface SVGAnimatedEnumeration<T extends number = number> extends SVGAnimatedEnumeration.Interface<T> {}

/** @exposed Window */
export namespace SVGAnimatedEnumeration {
	export interface Prototype<T extends number = number> extends SVGAnimatedMutable<T> {}

	export type Interface<T extends number = number> = Prototype<T>;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

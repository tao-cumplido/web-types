import type { SVGAnimatedReadonly } from './mixins';
import type { SVGLength } from './svg-length';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength */
export interface SVGAnimatedLength extends SVGAnimatedLength.Interface {}

/** @exposed Window */
export namespace SVGAnimatedLength {
	export interface Prototype extends SVGAnimatedReadonly<SVGLength> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

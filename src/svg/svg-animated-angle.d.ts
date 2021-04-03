import type { SVGAnimatedReadonly } from './mixins';
import type { SVGAngle } from './svg-angle';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedAngle */
export interface SVGAnimatedAngle extends SVGAnimatedAngle.Interface {}

/** @exposed Window */
export namespace SVGAnimatedAngle {
	export interface Prototype extends SVGAnimatedReadonly<SVGAngle> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { SVGAnimatedReadonly } from './mixins';
import type { SVGPreserveAspectRatio } from './svg-preserve-aspect-ratio';

/** @spec https://svgwg.org/svg2-draft/coords.html#InterfaceSVGAnimatedPreserveAspectRatio */
export interface SVGAnimatedPreserveAspectRatio extends SVGAnimatedPreserveAspectRatio.Interface {}

/** @exposed Window */
export namespace SVGAnimatedPreserveAspectRatio {
	export interface Prototype extends SVGAnimatedReadonly<SVGPreserveAspectRatio> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

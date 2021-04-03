import type { SVGAnimatedReadonly } from './mixins';
import type { SVGLengthList } from './svg-length-list';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLengthList */
export interface SVGAnimatedLengthList extends SVGAnimatedLengthList.Interface {}

/** @exposed Window */
export namespace SVGAnimatedLengthList {
	export interface Prototype extends SVGAnimatedReadonly<SVGLengthList> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { SVGAnimatedReadonly } from './mixins';
import type { SVGTransformList } from './svg-transform-list';

/** @spec https://svgwg.org/svg2-draft/coords.html#InterfaceSVGAnimatedTransformList */
export interface SVGAnimatedTransformList extends SVGAnimatedTransformList.Interface {}

/** @exposed Window */
export namespace SVGAnimatedTransformList {
	export interface Prototype extends SVGAnimatedReadonly<SVGTransformList> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

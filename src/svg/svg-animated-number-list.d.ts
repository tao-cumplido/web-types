import type { SVGAnimatedReadonly } from './mixins';
import type { SVGNumberList } from './svg-number-list';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumberList */
export interface SVGAnimatedNumberList extends SVGAnimatedNumberList.Interface {}

/** @exposed Window */
export namespace SVGAnimatedNumberList {
	export interface Prototype extends SVGAnimatedReadonly<SVGNumberList> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

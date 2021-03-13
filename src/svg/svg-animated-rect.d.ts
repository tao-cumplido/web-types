import type { DOMRect, DOMRectReadOnly } from '../geometry';
import type { SVGAnimatedReadonly } from './mixins';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedRect */
export interface SVGAnimatedRect extends SVGAnimatedRect.Interface {}

/** @exposed Window */
export namespace SVGAnimatedRect {
	export interface Prototype extends SVGAnimatedReadonly<DOMRect, DOMRectReadOnly> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

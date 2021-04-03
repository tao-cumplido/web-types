import type { ShadowRoot } from '../dom';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGUseElementShadowRoot */
export interface SVGUseElementShadowRoot extends SVGUseElementShadowRoot.Interface {}

/** @exposed Window */
export namespace SVGUseElementShadowRoot {
	export interface Prototype extends ShadowRoot.Prototype {}

	export type Interface = Prototype & ShadowRoot.Interface;

	export interface Static extends ShadowRoot.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

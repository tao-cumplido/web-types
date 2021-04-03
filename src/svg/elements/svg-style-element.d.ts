import type { LinkStyle } from '../../css';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/styling.html#InterfaceSVGStyleElement */
export interface SVGStyleElement extends SVGStyleElement.Interface {}

/** @exposed Window */
export namespace SVGStyleElement {
	export interface Prototype extends SVGElement.Prototype, LinkStyle {
		type: string;
		media: string;
		title: string;
	}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

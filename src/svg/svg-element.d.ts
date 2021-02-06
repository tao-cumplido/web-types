import type { Element } from '../nodes';

export interface SVGElement extends SVGElement.Interface {}

export namespace SVGElement {
	export interface Prototype extends Element.Prototype {}

	export type Interface = Prototype & Element.Interface;

	export interface Static extends Element.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): SVGElement;
	}
}

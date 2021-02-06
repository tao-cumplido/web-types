import type { SVGElement } from './svg-element';

export interface SVGGraphicsElement extends SVGGraphicsElement.Interface {}

export namespace SVGGraphicsElement {
	export interface Prototype extends SVGElement.Prototype {}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): SVGGraphicsElement;
	}
}

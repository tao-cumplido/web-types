import type { SVGGraphicsElement } from './svg-graphics-element';

export interface SVGSVGElement extends SVGSVGElement.Interface {}

export namespace SVGSVGElement {
	export interface Prototype extends SVGGraphicsElement.Prototype {}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): SVGSVGElement;
	}
}

declare module '@tswt/core' {
	interface SVGElementMap {
		svg: SVGSVGElement;
	}
}

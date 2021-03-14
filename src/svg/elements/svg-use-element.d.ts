import type { SVGURIReference } from '../mixins';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGElement } from './svg-element';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGUseElement */
export interface SVGUseElement extends SVGUseElement.Interface {}

/** @exposed Window */
export namespace SVGUseElement {
	export interface Prototype extends SVGGraphicsElement.Prototype, SVGURIReference {
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;
		readonly instanceRoot: SVGElement | null;
		readonly animatedInstanceRoot: SVGElement | null;
	}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

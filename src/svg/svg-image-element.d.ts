import type { HTMLLinkElement } from '../html';
import type { SVGURIReference } from './mixins';
import type { SVGAnimatedLength } from './svg-animated-length';
import type { SVGGraphicsElement } from './svg-graphics-element';
import type { SVGPreserveAspectRatio } from './svg-preserve-aspect-ratio';

/** @spec https://svgwg.org/svg2-draft/embedded.html#InterfaceSVGImageElement */
export interface SVGImageElement extends SVGImageElement.Interface {}

/** @exposed Window */
export namespace SVGImageElement {
	export interface Prototype extends SVGGraphicsElement.Prototype, SVGURIReference {
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;
		readonly preserveAspectRation: SVGPreserveAspectRatio;

		crossOrigin: HTMLLinkElement.CORSSettingsAttribute | null;
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

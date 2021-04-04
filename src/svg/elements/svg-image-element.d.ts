import type { CORSSettingsAttribute } from '../../html';
import type { SVGURIReference } from '../mixins';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGPreserveAspectRatio } from '../svg-preserve-aspect-ratio';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/embedded.html#InterfaceSVGImageElement */
export interface SVGImageElement extends SVGImageElement.Interface {}

/** @exposed Window */
export namespace SVGImageElement {
	export interface Prototype extends SVGGraphicsElement.Prototype, SVGURIReference {
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;
		readonly preserveAspectRatio: SVGPreserveAspectRatio;

		crossOrigin: CORSSettingsAttribute | null;
	}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

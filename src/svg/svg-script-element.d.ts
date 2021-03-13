import type { HTMLLinkElement } from '../html';
import type { SVGURIReference } from './mixins';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/interact.html#InterfaceSVGScriptElement */
export interface SVGScriptElement extends SVGScriptElement.Interface {}

/** @exposed Window */
export namespace SVGScriptElement {
	export interface Prototype extends SVGElement.Prototype, SVGURIReference {
		type: string;
		crossOrigin: HTMLLinkElement.CORSSettingsAttribute | null;
	}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

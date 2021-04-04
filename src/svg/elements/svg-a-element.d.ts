import type { DOMTokenList } from '../../collections';
import type { ReferrerPolicy } from '../../fetch';
import type { HTMLHyperlinkElementUtils } from '../../html';
import type { SVGURIReference } from '../mixins';
import type { SVGAnimatedString } from '../svg-animated-string';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/linking.html#InterfaceSVGAElement */
export interface SVGAElement extends SVGAElement.Interface {}

/** @exposed Window */
export namespace SVGAElement {
	export interface Prototype
		extends SVGGraphicsElement.Prototype, SVGURIReference, Omit<HTMLHyperlinkElementUtils, 'href'>
	{
		readonly target: SVGAnimatedString;
		readonly relList: DOMTokenList;

		download: string;
		ping: string;
		rel: string;
		hreflang: string;
		type: string;
		text: string;
		referrerPolicy: ReferrerPolicy;
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

import type { Element } from '../dom';
import type { ElementCSSInlineStyle } from '../mixins';

export interface SVGElement extends SVGElement.Interface {}

export namespace SVGElement {
	export interface Prototype extends Element.Prototype, ElementCSSInlineStyle {}

	export type Interface = Prototype & Element.Interface;

	export interface Static extends Element.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): SVGElement;
	}
}

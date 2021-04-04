import type { ValueOf } from '../../@types';
import type { DOMPoint, DOMPointInit, DOMRect } from '../../geometry';
import type { SVGAnimatedEnumeration } from '../svg-animated-enumeration';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGGraphicsElement } from './svg-graphics-element';

/** @spec https://svgwg.org/svg2-draft/text.html#InterfaceSVGTextContentElement */
export interface SVGTextContentElement extends SVGTextContentElement.Interface {}

/** @exposed Window */
export namespace SVGTextContentElement {
	export interface LengthAdjust {
		readonly LENGTHADJUST_UNKNOWN: 0;
		readonly LENGTHADJUST_SPACING: 1;
		readonly LENGTHADJUST_SPACINGANDGLYPHS: 2;
	}

	export interface Prototype extends SVGGraphicsElement.Prototype, LengthAdjust {
		readonly textLength: SVGAnimatedLength;
		readonly lengthAdjust: SVGAnimatedEnumeration<ValueOf<LengthAdjust>>;

		getNumberOfChars(): number;
		getComputedTextLength(): number;
		getSubStringLength(charnum: number, nchars: number): number;
		getStartPositionOfChar(charnum: number): DOMPoint;
		getEndPositionOfChar(charnum: number): DOMPoint;
		getExtentOfChard(charnum: number): DOMRect;
		getRotationOfChar(charnum: number): number;
		getCharNumAtPosition(point?: DOMPointInit): number;
		selectSubString(charnum: number, nchars: number): void;
	}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static, LengthAdjust {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

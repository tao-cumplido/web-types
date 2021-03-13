import type { ValueOf } from '../@types';
import type { DOMMatrix, DOMMatrix2DInit } from '../geometry';

/** @spec https://svgwg.org/svg2-draft/coords.html#InterfaceSVGTransform */
export interface SVGTransform extends SVGTransform.Interface {}

/** @exposed Window */
export namespace SVGTransform {
	export interface Types {
		readonly SVG_TRANSFORM_UNKNOWN: 0;
		readonly SVG_TRANSFORM_MATRIX: 1;
		readonly SVG_TRANSFORM_TRANSLATE: 2;
		readonly SVG_TRANSFORM_SCALE: 3;
		readonly SVG_TRANSFORM_ROTATE: 4;
		readonly SVG_TRANSFORM_SKEWX: 5;
		readonly SVG_TRANSFORM_SKEWY: 6;
	}

	export interface Prototype extends Types {
		readonly type: ValueOf<Types>;
		readonly matrix: DOMMatrix;
		readonly angle: number;

		setMatrix(matrix?: DOMMatrix2DInit): void;
		setTranslate(tx: number, ty: number): void;
		setScale(sx: number, sy: number): void;
		setRotate(angle: number, cx: number, cy: number): void;
		setSkewX(angle: number): void;
		setSkewY(angle: number): void;
	}

	export type Interface = Prototype;

	export interface Static extends Types {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

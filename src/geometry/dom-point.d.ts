import type { WritableInherit } from '../@types';
import type { DOMMatrix } from './dom-matrix';

export interface DOMPointReadOnly extends DOMPointReadOnly.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace DOMPointReadOnly {
	export interface Prototype extends Readonly<DOMPoint.JSONObject> {
		matrixTransform(matrix?: DOMMatrix.Init): DOMPoint;
		toJSON(): DOMPoint.JSONObject;
	}

	export type Interface = Prototype;

	export interface Static<This extends DOMPointReadOnly> {
		prototype: Prototype;
		fromPoint(other?: DOMPoint.Init): This;
	}

	export interface Constructor extends Static<DOMPointReadOnly> {
		new (x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
	}
}

export interface DOMPoint extends DOMPoint.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @legacyWindowAlias SVGPoint
 */
export namespace DOMPoint {
	export interface Init {
		x?: number;
		y?: number;
		z?: number;
		w?: number;
	}

	export interface JSONObject extends Required<Init> {}

	export interface Prototype extends WritableInherit<DOMPointReadOnly.Prototype, keyof Init> {}

	export type Interface = Prototype & WritableInherit<DOMPointReadOnly.Interface, keyof Init>;

	export interface Static extends DOMPointReadOnly.Static<DOMPoint> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (x?: number, y?: number, z?: number, w?: number): DOMPoint;
	}
}

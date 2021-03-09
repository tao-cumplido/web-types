import type { WritableInherit } from '../@types';
import type { DOMMatrixInit } from './dom-matrix';

/** @spec https://drafts.fxtf.org/geometry/#dictdef-dompointinit */
export interface DOMPointInit {
	x?: number;
	y?: number;
	z?: number;
	w?: number;
}

/** @spec https://drafts.fxtf.org/geometry/#dompointreadonly */
export interface DOMPointReadOnly extends DOMPointReadOnly.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace DOMPointReadOnly {
	export interface Prototype extends Readonly<DOMPoint.JSONObject> {
		matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
		toJSON(): DOMPoint.JSONObject;
	}

	export type Interface = Prototype;

	export interface Static<This extends DOMPointReadOnly> {
		prototype: Prototype;
		fromPoint(other?: DOMPointInit): This;
	}

	export interface Constructor extends Static<DOMPointReadOnly> {
		new (x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
	}
}

/** @spec https://drafts.fxtf.org/geometry/#dompoint */
export interface DOMPoint extends DOMPoint.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @legacyWindowAlias SVGPoint
 */
export namespace DOMPoint {
	export interface JSONObject extends Required<DOMPointInit> {}

	export interface Prototype extends WritableInherit<DOMPointReadOnly.Prototype, keyof DOMPointInit> {}

	export type Interface = Prototype & WritableInherit<DOMPointReadOnly.Interface, keyof DOMPointInit>;

	export interface Static extends DOMPointReadOnly.Static<DOMPoint> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (x?: number, y?: number, z?: number, w?: number): DOMPoint;
	}
}

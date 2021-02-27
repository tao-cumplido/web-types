import type { WritableInherit } from '../@types';
import type { DOMPoint, DOMPointInit } from './dom-point';

/** @spec https://drafts.fxtf.org/geometry/#dictdef-dommatrix2dinit */
export interface DOMMatrix2DInit {
	a?: number;
	b?: number;
	c?: number;
	d?: number;
	e?: number;
	f?: number;
	m11?: number;
	m12?: number;
	m21?: number;
	m22?: number;
	m41?: number;
	m42?: number;
}

/** @spec https://drafts.fxtf.org/geometry/#dictdef-dommatrixinit */
export interface DOMMatrixInit extends DOMMatrix2DInit {
	m13?: number;
	m14?: number;
	m23?: number;
	m24?: number;
	m31?: number;
	m32?: number;
	m33?: number;
	m34?: number;
	m43?: number;
	m44?: number;
	is2D?: boolean;
}

/** @spec https://drafts.fxtf.org/geometry/#dommatrixreadonly */
export interface DOMMatrixReadOnly extends DOMMatrixReadOnly.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace DOMMatrixReadOnly {
	export interface Prototype extends Readonly<DOMMatrix.JSONObject> {
		translate: DOMMatrix.Translate;
		scale: DOMMatrix.Scale;
		scaleNonUniform: DOMMatrix.ScaleNonUniform;
		scale3d: DOMMatrix.Scale3D;
		rotate: DOMMatrix.Rotate;
		rotateFromVector: DOMMatrix.RotateFromVector;
		rotateAxisAngle: DOMMatrix.RotateAxisAngle;
		skewX: DOMMatrix.SkewX;
		skewY: DOMMatrix.SkewY;
		multiply: DOMMatrix.Multiply;
		flipX: DOMMatrix.Transform;
		flipY: DOMMatrix.Transform;
		inverse: DOMMatrix.Transform;
		transformPoint: DOMMatrix.Transform<[point?: DOMPointInit], DOMPoint>;

		toFloat32Array(): Float32Array;
		toFloat64Array(): Float64Array;

		toJSON(): DOMMatrix.JSONObject;
	}

	export type Interface = Prototype;

	export interface Static<This extends DOMMatrixReadOnly> {
		prototype: Prototype;
		fromMatrix(other?: DOMMatrixInit): This;
		fromFloat32Array(array32: Float32Array): This;
		fromFloat64Array(array64: Float64Array): This;
	}

	export interface Constructor extends Static<DOMMatrixReadOnly> {
		new (init?: string | number[]): DOMMatrixReadOnly;
	}
}

export interface DOMMatrix extends DOMMatrix.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @legacyWindowAlias SVGMatrix
 * @legacyWindowAlias WebKitCSSMatrix
 */
export namespace DOMMatrix {
	export interface JSONObject extends Required<DOMMatrixInit> {
		isIdentity: boolean;
	}

	export type Transform<Args extends unknown[] = [], Result = DOMMatrix> = (...args: Args) => Result;

	export type Multiply = Transform<[other?: DOMMatrixInit]>;

	export type Translate = Transform<[tx?: number, ty?: number, tz?: number]>;

	export type Scale = Transform<
		[scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number]
	>;

	export type ScaleNonUniform = Transform<[scaleX?: number, scaleY?: number]>;

	export type Scale3D = Transform<[scale?: number, originX?: number, originY?: number, originZ?: number]>;

	export type Rotate = Transform<[rotX?: number, rotY?: number, rotZ?: number]>;

	export type RotateFromVector = Transform<[x?: number, y?: number]>;

	export type RotateAxisAngle = Transform<[x?: number, y?: number, z?: number, angle?: number]>;

	export type SkewX = Transform<[sx?: number]>;

	export type SkewY = Transform<[sy?: number]>;

	type ReadonlyKeys = Exclude<keyof DOMMatrixInit, 'is2D'>;

	export interface Prototype extends WritableInherit<DOMMatrixReadOnly.Prototype, ReadonlyKeys> {
		multiplySelf: Multiply;
		preMultiplySelf: Multiply;
		translateSelf: Translate;
		scaleSelf: Scale;
		scale3dSelf: Scale3D;
		rotateSelf: Rotate;
		rotateFromVectorSelf: RotateFromVector;
		rotateAxisAngleSelf: RotateAxisAngle;
		skewXSelf: SkewX;
		skewYSelf: SkewY;
		invertSelf: Transform;
	}

	export namespace Prototype {
		export interface Window {
			setMatrixValue: Transform<[transformList: string]>;
		}
	}

	export type Interface = Prototype & WritableInherit<DOMMatrixReadOnly.Interface, ReadonlyKeys>;

	export interface Static extends DOMMatrixReadOnly.Static<DOMMatrix> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (init?: string | number[]): DOMMatrix;
	}
}

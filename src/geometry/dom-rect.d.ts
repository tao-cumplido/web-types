import type { WritableInherit } from '../@types';

/** @spec https://drafts.fxtf.org/geometry/#dictdef-domrectinit */
export interface DOMRectInit {
	x?: number;
	y?: number;
	width?: number;
	height?: number;
}

/** @spec https://drafts.fxtf.org/geometry/#domrectreadonly */
export interface DOMRectReadOnly extends DOMRectReadOnly.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace DOMRectReadOnly {
	export interface Prototype extends Required<DOMRect.JSONObject> {
		toJSON(): DOMRect.JSONObject;
	}

	export type Interface = Prototype;

	export interface Static<This extends DOMRectReadOnly> {
		prototype: Prototype;
		fromRect(other?: DOMRectInit): This;
	}

	export interface Constructor extends Static<DOMRectReadOnly> {
		new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
	}
}

/** @spec https://drafts.fxtf.org/geometry/#domrect */
export interface DOMRect extends DOMRect.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @legacyWindowAlias SVGRect
 */
export namespace DOMRect {
	export interface JSONObject extends Required<DOMRectInit> {
		top: number;
		right: number;
		bottom: number;
		left: number;
	}

	export interface Prototype extends WritableInherit<DOMRectReadOnly.Prototype, keyof DOMRectInit> {}

	export type Interface = Prototype & WritableInherit<DOMRectReadOnly.Interface, keyof DOMRectInit>;

	export interface Static extends DOMRectReadOnly.Static<DOMRect> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(x?: number, y?: number, width?: number, height?: number): DOMRect;
	}
}

import type { EventTarget } from '../dom';

/**
 * @idlType
 * @spec https://w3c.github.io/touch-events/#ref-for-dom-touchtype-1
 */
export type TouchType = 'direct' | 'stylus';

/**
 * @idlType
 * @spec https://w3c.github.io/touch-events/#idl-def-touchinit
 */
export interface TouchInit {
	identifier: number;
	target: EventTarget;
	clientX?: number;
	clientY?: number;
	screenX?: number;
	screenY?: number;
	pageX?: number;
	pageY?: number;
	radiusX?: number;
	radiusY?: number;
	rotationAngle?: number;
	force?: number;
	altitudeAngle?: number;
	azimuthAngle?: number;
	touchType?: TouchType;
}

/** @spec https://w3c.github.io/touch-events/#touch-interface */
export interface Touch extends Touch.Interface {}

/** @exposed Window */
export namespace Touch {
	export interface Prototype extends Readonly<Required<TouchInit>> {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(touchInitDict: TouchInit): Touch;
	}
}

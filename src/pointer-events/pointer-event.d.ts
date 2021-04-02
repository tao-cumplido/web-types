import type { MouseEvent, MouseEventInit } from '../ui-events';

/**
 * @idlType
 * @spec https://w3c.github.io/pointerevents/#dom-pointereventinit
 */
export interface PointerEventInit extends Partial<PointerEvent.State>, MouseEventInit {
	coalescedEvents?: PointerEvent[];
	predictedEvents?: PointerEvent[];
}

/** @spec https://w3c.github.io/pointerevents/#pointerevent-interface */
export interface PointerEvent extends PointerEvent.Interface {}

/** @exposed Window */
export namespace PointerEvent {
	export interface State {
		pointerId: number;
		width: number;
		height: number;
		pressure: number;
		tangentialPressure: number;
		tiltX: number;
		tiltY: number;
		twist: number;
		altitudeAngle: number;
		azimuthAngle: number;
		pointerType: string;
		isPrimary: boolean;
	}

	export interface Prototype extends Readonly<State>, MouseEvent.Prototype {
		getCoalescedEvents?(): PointerEvent[];
		getPredictedEvents(): PointerEvent[];
	}

	export type Interface = Prototype & MouseEvent.Interface;

	export interface Static extends MouseEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
	}
}

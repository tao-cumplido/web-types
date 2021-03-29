import type { ValueOf } from '../@types';
import type { MouseEvent, MouseEventInit } from './mouse-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#dictdef-wheeleventinit
 */
export interface WheelEventInit extends Partial<WheelEvent.State>, MouseEventInit {}

/** @spec https://w3c.github.io/uievents/#idl-wheelevent */
export interface WheelEvent extends WheelEvent.Interface {}

/** @exposed Window */
export namespace WheelEvent {
	export interface DeltaMode {
		readonly DOM_DELTA_PIXEL: 0x00;
		readonly DOM_DELTA_LINE: 0x01;
		readonly DOM_DELTA_PAGE: 0x02;
	}

	export interface State {
		deltaX: number;
		deltaY: number;
		deltaZ: number;
		deltaMode: ValueOf<DeltaMode>;
	}

	export interface Prototype extends Readonly<State>, MouseEvent.Prototype, DeltaMode {}

	export type Interface = Prototype & MouseEvent.Interface;

	export interface Static extends MouseEvent.Static, DeltaMode {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: WheelEventInit): WheelEvent;
	}
}

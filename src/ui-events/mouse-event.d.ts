import type { EventTarget } from '../dom';
import type { BaseModifiers, EventModifierInit, GetModifierState } from './types';
import type { UIEvent } from './ui-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#idl-mouseeventinit
 */
export interface MouseEventInit extends Partial<MouseEvent.State>, EventModifierInit {}

/** @spec https://w3c.github.io/uievents/#idl-mouseevent */
export interface MouseEvent extends MouseEvent.Interface {}

/** @exposed Window */
export namespace MouseEvent {
	export interface State {
		screenX: number;
		screenY: number;
		clientX: number;
		clientY: number;

		button: number;
		buttons: number;

		relatedTarget: EventTarget | null;
	}

	export interface Prototype extends Readonly<State>, Readonly<BaseModifiers>, UIEvent.Prototype, GetModifierState {}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
	}
}

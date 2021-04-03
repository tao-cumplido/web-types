import type { EventTarget } from '../dom';
import type { Window } from '../html';
import type { BaseModifiers, EventModifierInit, GetModifierState } from './types';
import type { UIEvent } from './ui-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#idl-mouseeventinit
 */
export interface MouseEventInit extends Partial<MouseEvent.State>, EventModifierInit {}

/**
 * @spec https://w3c.github.io/uievents/#idl-mouseevent
 * @spec https://w3c.github.io/uievents/#idl-interface-MouseEvent-initializers
 */
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

	export interface Prototype extends Readonly<State>, Readonly<BaseModifiers>, UIEvent.Prototype, GetModifierState {
		/** @deprecated */
		initMouseEvent(
			type: string,
			bubbles?: boolean,
			cancelable?: boolean,
			view?: Window | null,
			detail?: number,
			screenX?: number,
			screenY?: number,
			clientX?: number,
			clientY?: number,
			ctrlKey?: boolean,
			altKey?: boolean,
			shiftKey?: boolean,
			metaKey?: boolean,
			button?: number,
			relatedTarget?: EventTarget | null,
		): void;
	}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
	}
}

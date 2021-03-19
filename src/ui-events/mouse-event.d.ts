import type { EventTarget } from '../dom';
import type { EventModifierInit, UIEvent } from './ui-event';

/** @spec https://w3c.github.io/uievents/#idl-mouseeventinit */
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

		ctrlKey: boolean;
		shiftKey: boolean;
		altKey: boolean;
		metaKey: boolean;

		button: number;
		buttons: number;

		relatedTarget: EventTarget | null;
	}

	export interface Prototype extends Readonly<State>, UIEvent.Prototype {
		// TODO: restrict keyArg to valid modifiers https://www.w3.org/TR/uievents-key/#keys-special
		getModifierState(keyArg: string): boolean;
	}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
	}
}

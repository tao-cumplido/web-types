import type { ValueOf } from '../@types';
import type { Window } from '../html';
import type { BaseModifiers, EventModifierInit, GetModifierState } from './types';
import type { UIEvent } from './ui-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#dictdef-keyboardeventinit
 * @spec https://w3c.github.io/uievents/#legacy-dictionary-KeyboardEventInit
 */
export interface KeyboardEventInit extends Partial<KeyboardEvent.State>, EventModifierInit {}

/**
 * @spec https://w3c.github.io/uievents/#idl-keyboardevent
 * @spec https://w3c.github.io/uievents/#idl-interface-KeyboardEvent-initializers
 * @spec https://w3c.github.io/uievents/#legacy-interface-KeyboardEvent
 */
export interface KeyboardEvent extends KeyboardEvent.Interface {}

/** @exposed Window */
export namespace KeyboardEvent {
	export interface KeyLocation {
		readonly DOM_KEY_LOCATION_STANDARD: 0x00;
		readonly DOM_KEY_LOCATION_LEFT: 0x01;
		readonly DOM_KEY_LOCATION_RIGHT: 0x02;
		readonly DOM_KEY_LOCATION_NUMPAD: 0x03;
	}

	export interface State {
		key: string;
		code: string;
		location: ValueOf<KeyLocation>;
		repeat: boolean;
		isComposing: boolean;
		/** @deprecated */
		charCode: number;
		/** @deprecated */
		keyCode: number;
	}

	export interface Prototype
		extends Readonly<State>, Readonly<BaseModifiers>, KeyLocation, UIEvent.Prototype, GetModifierState
	{
		/** @deprecated */
		initKeyboardEvent(
			type: string,
			bubbles?: boolean,
			cancelable?: boolean,
			view?: Window | null,
			key?: string,
			location?: ValueOf<KeyLocation>,
			ctrlKey?: boolean,
			altKey?: boolean,
			shiftKey?: boolean,
			metaKey?: boolean,
		): void;
	}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static, KeyLocation {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
	}
}

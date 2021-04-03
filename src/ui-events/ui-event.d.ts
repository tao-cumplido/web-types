import type { Event, EventInit } from '../dom';
import type { Window } from '../html';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#idl-uieventinit
 * @spec https://w3c.github.io/uievents/#legacy-dictionary-UIEventInit
 */
export interface UIEventInit extends Partial<UIEvent.State>, EventInit {}

/**
 * @spec https://w3c.github.io/uievents/#idl-uievent
 * @spec https://w3c.github.io/uievents/#idl-interface-UIEvent-initializers
 * @spec https://w3c.github.io/uievents/#legacy-interface-UIEvent
 */
export interface UIEvent extends UIEvent.Interface {}

/** @exposed Window */
export namespace UIEvent {
	export interface State {
		view: Window | null;
		detail: number;
		/** @deprecated */
		which: number;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {
		/** @deprecated */
		initUIEvent(
			type: string,
			bubbles?: boolean,
			cancelable?: boolean,
			view?: Window | null,
			detail?: number | null,
		): void;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: UIEventInit): UIEvent;
	}
}

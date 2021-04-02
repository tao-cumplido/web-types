import type { Event, EventInit } from '../dom';
import type { Window } from '../html';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#idl-uieventinit
 */
export interface UIEventInit extends Partial<UIEvent.State>, EventInit {}

/** @spec https://w3c.github.io/uievents/#idl-uievent */
export interface UIEvent extends UIEvent.Interface {}

/** @exposed Window */
export namespace UIEvent {
	export interface State {
		view: Window | null;
		detail: number;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: UIEventInit): UIEvent;
	}
}

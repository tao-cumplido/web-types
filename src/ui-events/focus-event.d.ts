import type { EventTarget } from '../dom';
import type { UIEvent, UIEventInit } from './ui-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#idl-focuseventinit
 */
export interface FocusEventInit extends Partial<FocusEvent.State>, UIEventInit {}

/** @spec https://w3c.github.io/uievents/#idl-focusevent */
export interface FocusEvent extends FocusEvent.Interface {}

/** @exposed Window */
export namespace FocusEvent {
	export interface State {
		relatedTarget: EventTarget | null;
	}

	export interface Prototype extends Readonly<State>, UIEvent.Prototype {}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: FocusEventInit): FocusEvent;
	}
}

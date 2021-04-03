import type { Window } from '../html';
import type { UIEvent, UIEventInit } from './ui-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#dictdef-compositioneventinit
 */
export interface CompositionEventInit extends Partial<CompositionEvent.State>, UIEventInit {}

/**
 * @spec https://w3c.github.io/uievents/#idl-compositionevent
 * @spec https://w3c.github.io/uievents/#idl-interface-CompositionEvent-initializers
 */
export interface CompositionEvent extends CompositionEvent.Interface {}

/** @exposed Window */
export namespace CompositionEvent {
	export interface State {
		data: string;
	}

	export interface Prototype extends Readonly<State>, UIEvent.Prototype {
		/** @deprecated */
		initCompositionEvent(
			type: string,
			bubbles?: boolean,
			cancelable?: boolean,
			view?: Window | null,
			data?: string,
		): void;
	}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: CompositionEventInit): CompositionEvent;
	}
}

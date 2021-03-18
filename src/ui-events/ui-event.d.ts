import type { Event, EventInit } from '../dom';
import type { Window } from '../html';

/** @spec https://w3c.github.io/uievents/#idl-uieventinit */
export interface UIEventInit extends EventInit {
	view?: Window | null;
	detail?: number;
}

/** @spec https://w3c.github.io/uievents/#event-modifier-initializers */
export interface EventModifierInit extends UIEventInit {
	ctrlKey?: boolean;
	shiftKey?: boolean;
	altKey?: boolean;
	metaKey?: boolean;

	modifierAltGraph?: boolean;
	modifierCapsLock?: boolean;
	modifierFn?: boolean;
	modifierFnLock?: boolean;
	modifierHyper?: boolean;
	modifierNumLock?: boolean;
	modifierScrollLock?: boolean;
	modifierSuper?: boolean;
	modifierSymbol?: boolean;
	modifierSymbolLock?: boolean;
}

/** @spec https://w3c.github.io/uievents/#idl-uievent */
export interface UIEvent extends UIEvent.Interface {}

/** @exposed Window */
export namespace UIEvent {
	export interface Prototype extends Event.Prototype {
		readonly view: Window | null;
		readonly detail: number;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict?: UIEventInit): UIEvent;
	}
}

import type { EventTarget } from '../dom';
import type { EventModifierInit, UIEvent } from './ui-event';

/** @spec https://w3c.github.io/uievents/#idl-mouseeventinit */
export interface MouseEventInit extends EventModifierInit {
	screenX?: number;
	screenY?: number;
	clientX?: number;
	clientY?: number;

	button?: number;
	buttons?: number;
	relatedTarget?: EventTarget | null;
}

/** @spec https://w3c.github.io/uievents/#idl-mouseevent */
export interface MouseEvent extends MouseEvent.Interface {}

/** @exposed Window */
export namespace MouseEvent {
	export interface Prototype extends UIEvent.Prototype {
		readonly screenX: number;
		readonly screenY: number;
		readonly clientX: number;
		readonly clientY: number;

		readonly ctrlKey: boolean;
		readonly shiftKey: boolean;
		readonly altKey: boolean;
		readonly metaKey: boolean;

		readonly button: number;
		readonly buttons: number;

		readonly relatedTarget: EventTarget | null;

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

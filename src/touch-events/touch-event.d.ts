import type { BaseModifiers, EventModifierInit, UIEvent } from '../ui-events';
import type { Touch } from './touch';
import type { TouchList } from './touch-list';

/**
 * @idlType
 * @spec https://w3c.github.io/touch-events/#dom-toucheventinit
 */
export interface TouchEventInit extends EventModifierInit {
	touches?: Touch[];
	targetTouches?: Touch[];
	changedTouches?: Touch[];
}

/** @spec https://w3c.github.io/touch-events/#touchevent-interface */
export interface TouchEvent extends TouchEvent.Interface {}

/** @exposed Window */
export namespace TouchEvent {
	export interface Prototype extends UIEvent.Prototype, Readonly<BaseModifiers> {
		readonly touches: TouchList;
		readonly targetTouches: TouchList;
		readonly changedTouches: TouchList;
	}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
	}
}

import type { Event, EventHandlerMap, EventTarget } from '../dom';

/** @spec https://dom.spec.whatwg.org/#interface-AbortSignal */
export interface AbortSignal extends AbortSignal.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace AbortSignal {
	export interface EventTypes {
		abort: Event;
	}

	export interface Prototype extends EventTarget.Prototype<EventTypes>, EventHandlerMap<EventTypes> {
		readonly aborted: boolean;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
		abort(): AbortSignal;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

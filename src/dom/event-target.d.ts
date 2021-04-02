import type { AbortSignal } from '../abort';
import type { OnBeforeUnloadEventHandler } from '../html';
import type { Event } from './event';

// TODO: move event handler types to html

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#eventhandlernonnull
 */
export type EventHandlerNonNull<AbstractEvent extends Event = Event> = (event: AbstractEvent) => unknown;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler
 */
export type EventHandler<AbstractEvent extends Event = Event> = EventHandlerNonNull<AbstractEvent> | null;

export type EventHandlerMap<EventTypes extends Record<keyof EventTypes, Event>> = {
	[P in keyof EventTypes as `on${Lowercase<string & P>}`]: P extends 'unload' ? OnBeforeUnloadEventHandler
		: EventHandler<EventTypes[P]>;
};

/**
 * @idlType
 * @spec https://dom.spec.whatwg.org/#callbackdef-eventlistener
 */
export type EventListener<
	AbstractEvent extends Event = Event,
> = ((event: AbstractEvent) => void) | { handleEvent: ((event: AbstractEvent) => void) };

/**
 * @idlType
 * @spec https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions
 */
export interface EventListenerOptions {
	capture?: boolean;
}

/**
 * @idlType
 * @spec https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions
 */
export interface AddEventListenerOptions extends EventListenerOptions {
	passive?: boolean;
	once?: boolean;
	signal?: AbortSignal | null;
}

/** @spec https://dom.spec.whatwg.org/#interface-eventtarget */
export interface EventTarget extends EventTarget.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace EventTarget {
	export interface Prototype<EventMap extends Record<keyof EventMap, Event> = Record<never, never>> {
		addEventListener<EventType extends keyof EventMap>(
			type: EventType,
			callback?: EventListener<EventMap[EventType]>,
			options?: AddEventListenerOptions | boolean,
		): void;

		addEventListener(type: string, callback?: EventListener, options?: AddEventListenerOptions | boolean): void;

		removeEventListener<EventType extends keyof EventMap>(
			type: EventType,
			callback?: EventListener<EventMap[EventType]>,
			options?: EventListenerOptions | boolean,
		): void;

		removeEventListener(type: string, callback?: EventListener, options?: EventListenerOptions | boolean): void;

		dispatchEvent(event: Event): boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(): EventTarget;
	}
}

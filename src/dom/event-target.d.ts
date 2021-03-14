import type { AbortSignal } from '../abort';
import type { Event } from './event';

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#eventhandlernonnull */
export type EventHandlerNonNull<AbstractEvent extends Event = Event> = (event: AbstractEvent) => unknown;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler */
export type EventHandler<AbstractEvent extends Event = Event> = EventHandlerNonNull<AbstractEvent> | null;

/** @spec https://dom.spec.whatwg.org/#callbackdef-eventlistener - spec doesn't actually use EventHandlerNonNull definition */
export type EventListener<
	AbstractEvent extends Event = Event,
	Handler extends EventHandlerNonNull<AbstractEvent> = EventHandlerNonNull<AbstractEvent>
> = Handler | { handleEvent: Handler };

/** @spec https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions */
export interface EventListenerOptions {
	capture?: boolean;
}

/** @spec https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions */
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
	type ExtractEvents<T extends EventTarget> = {
		[P in keyof T]: P extends `on${infer K}`
			? K extends Lowercase<K>
				? NonNullable<T[P]> extends EventHandlerNonNull
					? K
					: never
				: never
			: never;
	}[keyof T];

	type HandlerToListener<T> = NonNullable<T> extends EventHandlerNonNull<infer AbstractEvent>
		? EventListener<AbstractEvent, NonNullable<T>>
		: never;

	export interface Prototype {
		addEventListener<E extends ExtractEvents<this>>(
			type: E,
			callback?: HandlerToListener<this[`on${E}`]>,
			options?: AddEventListenerOptions | boolean,
		): void;

		addEventListener(type: string, callback?: EventListener, options?: AddEventListenerOptions | boolean): void;

		removeEventListener<E extends ExtractEvents<this>>(
			type: E,
			callback?: HandlerToListener<this[`on${E}`]>,
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
		new (): EventTarget;
	}
}

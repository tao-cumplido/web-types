import type { Event } from './event';

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#eventhandlernonnull */
export type EventHandlerNonNull<AbstractEvent extends Event = Event> = (event: AbstractEvent) => unknown;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler */
export type EventHandler<AbstractEvent extends Event = Event> = EventHandlerNonNull<AbstractEvent> | null;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onerroreventhandlernonnull */
export type OnErrorEventHandlerNonNull = (
	event: Event | string,
	source?: string,
	lineno?: number,
	colno?: number,
	error?: Error,
) => unknown;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onerroreventhandler */
export type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandlernonnull */
export type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandler */
export type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;

import type { ValueOf } from '../@types';
import type { Event, EventHandlerMap, EventTarget } from '../dom';
import type { MessageEvent } from './message-event';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/server-sent-events.html#eventsourceinit
 */
export interface EventSourceInit {
	withCredentials?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/server-sent-events.html#the-eventsource-interface */
export interface EventSource extends EventSource.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace EventSource {
	export interface ReadyState {
		readonly CONNECTING: 0;
		readonly OPEN: 1;
		readonly CLOSED: 2;
	}

	export interface EventTypes {
		open: Event;
		message: MessageEvent;
		error: Event;
	}

	export interface Prototype extends EventTarget.Prototype<EventTypes>, ReadyState, EventHandlerMap<EventTypes> {
		readonly url: string;
		readonly withCredentials: boolean;
		readonly readyState: ValueOf<ReadyState>;

		close(): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static, ReadyState {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
	}
}

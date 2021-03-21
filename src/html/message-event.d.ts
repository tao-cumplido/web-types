import type { Event, EventInit } from '../dom';
import type { ServiceWorker } from '../service-workers';
import type { MessagePort } from './message-port';
import type { Serializable } from './types';
import type { WindowProxy } from './window';

/** @spec https://html.spec.whatwg.org/multipage/comms.html#messageeventsource */
export type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;

/** @spec https://html.spec.whatwg.org/multipage/comms.html#messageeventinit */
export interface MessageEventInit extends Partial<MessageEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/comms.html#the-messageevent-interface */
export interface MessageEvent extends MessageEvent.Interface {}

/** @exposed Window */
export namespace MessageEvent {
	export interface State {
		data: Serializable;
		origin: string;
		lastEventId: string;
		source: MessageEventSource | null;
		ports: MessagePort[];
	}

	export interface Prototype extends Omit<Readonly<State>, 'ports'>, Event.Prototype {
		readonly ports: ReadonlyArray<Readonly<MessagePort>>;

		initMessageEvent(
			type: string,
			bubbles?: boolean,
			cancelable?: boolean,
			data?: Serializable,
			origin?: string,
			lastEventId?: string,
			source?: MessageEventSource | null,
			ports?: MessagePort[],
		): void;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: MessageEventInit): MessageEvent;
	}
}

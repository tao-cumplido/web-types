import type { Event, EventInit } from '../dom';
import type { Serializable } from './types';

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#popstateeventinit */
export interface PopStateEventInit extends EventInit {
	state?: Serializable;
}

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-popstateevent-interface */
export interface PopStateEvent extends PopStateEvent.Interface {}

/** @exposed Window */
export namespace PopStateEvent {
	export interface Prototype extends Event.Prototype {
		readonly state: Serializable;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
	}
}

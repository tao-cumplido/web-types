import type { Event, EventInit } from '../dom';

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#hashchangeeventinit */
export interface HashChangeEventInit extends EventInit {
	oldURL?: string;
	newURL?: string;
}

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-hashchangeevent-interface */
export interface HashChangeEvent extends HashChangeEvent.Interface {}

/** @exposed Window */
export namespace HashChangeEvent {
	export interface Prototype extends Event.Prototype {
		readonly oldURL: string;
		readonly newURL: string;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
	}
}

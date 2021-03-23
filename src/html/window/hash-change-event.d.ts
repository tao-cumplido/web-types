import type { Event, EventInit } from '../../dom';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#hashchangeeventinit
 */
export interface HashChangeEventInit extends Partial<HashChangeEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-hashchangeevent-interface */
export interface HashChangeEvent extends HashChangeEvent.Interface {}

/** @exposed Window */
export namespace HashChangeEvent {
	export interface State {
		oldURL: string;
		newURL: string;
	}
	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
	}
}

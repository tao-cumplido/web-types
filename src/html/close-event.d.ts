import type { Event, EventInit } from '../dom';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/web-sockets.html#closeeventinit
 */
export interface CloseEventInit extends Partial<CloseEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/web-sockets.html#the-closeevent-interface */
export interface CloseEvent extends CloseEvent.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CloseEvent {
	export interface State {
		wasClean: boolean;
		code: number;
		reason: string;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
	}
}

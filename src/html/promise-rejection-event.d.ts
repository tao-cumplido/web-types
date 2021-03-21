import type { Event, EventInit } from '../dom';

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#promiserejectioneventinit */
export interface PromiseRejectionEventInit extends PromiseRejectionEvent.State, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#promiserejectionevent */
export interface PromiseRejectionEvent extends PromiseRejectionEvent.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace PromiseRejectionEvent {
	export interface State {
		promise: Promise<unknown>;
		reason?: unknown;
	}

	export interface Prototype extends Readonly<Required<State>>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
	}
}

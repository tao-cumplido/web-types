import type { Event, EventInit } from '../dom';

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#erroreventinit */
export interface ErrorEventInit extends Partial<ErrorEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#errorevent */
export interface ErrorEvent extends ErrorEvent.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace ErrorEvent {
	export interface State {
		message: string;
		filename: string;
		lineno: number;
		colno: number;
		error: unknown;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
	}
}

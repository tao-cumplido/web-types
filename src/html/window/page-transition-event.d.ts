import type { Event, EventInit } from '../../dom';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#pagetransitioneventinit
 */
export interface PageTransitionEventInit extends Partial<PageTransitionEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-pagetransitionevent-interface */
export interface PageTransitionEvent extends PageTransitionEvent.Interface {}

/** @exposed Window */
export namespace PageTransitionEvent {
	export interface State {
		persisted: boolean;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
	}
}

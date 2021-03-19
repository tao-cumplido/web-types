import type { Event, EventInit } from '../dom';

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#pagetransitioneventinit */
export interface PageTransitionEventInit extends EventInit {
	persisted?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-pagetransitionevent-interface */
export interface PageTransitionEvent extends PageTransitionEvent.Interface {}

/** @exposed Window */
export namespace PageTransitionEvent {
	export interface Prototype extends Event.Prototype {
		readonly persisted: boolean;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
	}
}

import type { Event } from '../event';

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-beforeunloadevent-interface
 */
export interface BeforeUnloadEvent extends BeforeUnloadEvent.Interface {}

/** @exposed Window */
export namespace BeforeUnloadEvent {
	export interface Prototype extends Event.Prototype {
		/* the spec lists returnValue as DOMString but notes:
		   "This attribute is a DOMString only for historical reasons. Any value besides the empty string will be treated as a request to ask the user for confirmation."
		   it is typed as unknown in the Event parent for compatibility */
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

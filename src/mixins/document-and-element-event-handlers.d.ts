import type { Event, EventTarget } from '../event';

// TODO: add concrete events where appropriate
export interface DocumentAndElementEventHandlers extends EventTarget.Prototype {
	oncopy: Event.Handler<this> | null;
	oncut: Event.Handler<this> | null;
	onpaste: Event.Handler<this> | null;
}

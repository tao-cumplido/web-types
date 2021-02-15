import type { Event, EventTarget } from '../event';

// TODO: add concrete events where appropriate
export interface WindowEventHandlers extends EventTarget.Prototype {
	onafterprint: Event.Handler<this> | null;
	onbeforeprint: Event.Handler<this> | null;
	onbeforeunload: Event.Handler.OnBeforeUnload<this> | null;
	onhashchange: Event.Handler<this> | null;
	onlanguagechange: Event.Handler<this> | null;
	onmessage: Event.Handler<this> | null;
	onmessageerror: Event.Handler<this> | null;
	onoffline: Event.Handler<this> | null;
	ononline: Event.Handler<this> | null;
	onpagehide: Event.Handler<this> | null;
	onpageshow: Event.Handler<this> | null;
	onpopstate: Event.Handler<this> | null;
	onrejectionhandled: Event.Handler<this> | null;
	onstorage: Event.Handler<this> | null;
	onunhandledrejection: Event.Handler<this> | null;
	onunload: Event.Handler<this> | null;
}

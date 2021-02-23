import type { Event } from '../event';

// TODO: add concrete events where appropriate
export interface WindowEventHandlers {
	onafterprint: Event.Handler | null;
	onbeforeprint: Event.Handler | null;
	onbeforeunload: Event.Handler.OnBeforeUnload | null;
	onhashchange: Event.Handler | null;
	onlanguagechange: Event.Handler | null;
	onmessage: Event.Handler | null;
	onmessageerror: Event.Handler | null;
	onoffline: Event.Handler | null;
	ononline: Event.Handler | null;
	onpagehide: Event.Handler | null;
	onpageshow: Event.Handler | null;
	onpopstate: Event.Handler | null;
	onrejectionhandled: Event.Handler | null;
	onstorage: Event.Handler | null;
	onunhandledrejection: Event.Handler | null;
	onunload: Event.Handler | null;
}

import type { Event, EventTarget } from '../../event';

export type EventHandler<
	CurrentTarget extends EventTarget = EventTarget,
	AbstractEvent extends Event<CurrentTarget> = Event<CurrentTarget>
> = (this: CurrentTarget, event: AbstractEvent) => unknown;

export type OnErrorEventHandler<CurrentTarget extends EventTarget = EventTarget> = (
	this: CurrentTarget,
	event: Event<CurrentTarget> | string,
	source?: string,
	lineno?: number,
	colno?: number,
	error?: Error,
) => unknown;

export type OnBeforeUnloadEventHandler<CurrentTarget extends EventTarget = EventTarget> = (
	this: CurrentTarget,
	event: Event<CurrentTarget>,
) => string | null;

// TODO: add concrete events where appropriate
export interface GlobalEventHandlers extends EventTarget.Prototype {
	onabort: EventHandler<this> | null;
	onauxclick: EventHandler<this> | null;
	onblur: EventHandler<this> | null;
	oncancel: EventHandler<this> | null;
	oncanplay: EventHandler<this> | null;
	oncanplaythrough: EventHandler<this> | null;
	onchange: EventHandler<this> | null;
	onclick: EventHandler<this> | null;
	onclose: EventHandler<this> | null;
	oncontextmenu: EventHandler<this> | null;
	oncuechange: EventHandler<this> | null;
	ondblclick: EventHandler<this> | null;
	ondrag: EventHandler<this> | null;
	ondragend: EventHandler<this> | null;
	ondragenter: EventHandler<this> | null;
	ondragleave: EventHandler<this> | null;
	ondragover: EventHandler<this> | null;
	ondragstart: EventHandler<this> | null;
	ondrop: EventHandler<this> | null;
	ondurationchange: EventHandler<this> | null;
	onemptied: EventHandler<this> | null;
	onended: EventHandler<this> | null;
	onerror: OnErrorEventHandler<this> | null;
	onfocus: EventHandler<this> | null;
	onformdata: EventHandler<this> | null;
	oninput: EventHandler<this> | null;
	oninvalid: EventHandler<this> | null;
	onkeydown: EventHandler<this> | null;
	onkeypress: EventHandler<this> | null;
	onkeyup: EventHandler<this> | null;
	onload: EventHandler<this> | null;
	onloadeddata: EventHandler<this> | null;
	onloadedmetadata: EventHandler<this> | null;
	onloadstart: EventHandler<this> | null;
	onmousedown: EventHandler<this> | null;
	onmouseenter: EventHandler<this> | null;
	onmouseleave: EventHandler<this> | null;
	onmousemove: EventHandler<this> | null;
	onmouseout: EventHandler<this> | null;
	onmouseover: EventHandler<this> | null;
	onmouseup: EventHandler<this> | null;
	onpause: EventHandler<this> | null;
	onplay: EventHandler<this> | null;
	onplaying: EventHandler<this> | null;
	onprogress: EventHandler<this> | null;
	onratechange: EventHandler<this> | null;
	onreset: EventHandler<this> | null;
	onresize: EventHandler<this> | null;
	onscroll: EventHandler<this> | null;
	onsecuritypolicyviolation: EventHandler<this> | null;
	onseeked: EventHandler<this> | null;
	onseeking: EventHandler<this> | null;
	onselect: EventHandler<this> | null;
	onslotchange: EventHandler<this> | null;
	onstalled: EventHandler<this> | null;
	onsubmit: EventHandler<this> | null;
	onsuspend: EventHandler<this> | null;
	ontimeupdate: EventHandler<this> | null;
	ontoggle: EventHandler<this> | null;
	onvolumechange: EventHandler<this> | null;
	onwaiting: EventHandler<this> | null;
	onwebkitanimationend: EventHandler<this> | null;
	onwebkitanimationiteration: EventHandler<this> | null;
	onwebkitanimationstart: EventHandler<this> | null;
	onwebkittransitionend: EventHandler<this> | null;
	onwheel: EventHandler<this> | null;
}

export interface WindowEventHandlers extends EventTarget.Prototype {
	onafterprint: EventHandler<this> | null;
	onbeforeprint: EventHandler<this> | null;
	onbeforeunload: OnBeforeUnloadEventHandler<this> | null;
	onhashchange: EventHandler<this> | null;
	onlanguagechange: EventHandler<this> | null;
	onmessage: EventHandler<this> | null;
	onmessageerror: EventHandler<this> | null;
	onoffline: EventHandler<this> | null;
	ononline: EventHandler<this> | null;
	onpagehide: EventHandler<this> | null;
	onpageshow: EventHandler<this> | null;
	onpopstate: EventHandler<this> | null;
	onrejectionhandled: EventHandler<this> | null;
	onstorage: EventHandler<this> | null;
	onunhandledrejection: EventHandler<this> | null;
	onunload: EventHandler<this> | null;
}

export interface DocumentAndElementEventHandlers extends EventTarget.Prototype {
	oncopy: EventHandler<this> | null;
	oncut: EventHandler<this> | null;
	onpaste: EventHandler<this> | null;
}

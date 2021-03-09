import type { FormDataEvent, SubmitEvent } from '../html';
import type { EventHandler, OnBeforeUnloadEventHandler, OnErrorEventHandler } from './event-handler';

// TODO: add concrete events where appropriate

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers */
export interface GlobalEventHandlers {
	onabort: EventHandler;
	onauxclick: EventHandler;
	onblur: EventHandler;
	oncancel: EventHandler;
	oncanplay: EventHandler;
	oncanplaythrough: EventHandler;
	onchange: EventHandler;
	onclick: EventHandler;
	onclose: EventHandler;
	oncontextmenu: EventHandler;
	oncuechange: EventHandler;
	ondblclick: EventHandler;
	ondrag: EventHandler;
	ondragend: EventHandler;
	ondragenter: EventHandler;
	ondragleave: EventHandler;
	ondragover: EventHandler;
	ondragstart: EventHandler;
	ondrop: EventHandler;
	ondurationchange: EventHandler;
	onemptied: EventHandler;
	onended: EventHandler;
	onerror: OnErrorEventHandler;
	onfocus: EventHandler;
	onformdata: EventHandler<FormDataEvent>;
	oninput: EventHandler;
	oninvalid: EventHandler;
	onkeydown: EventHandler;
	onkeypress: EventHandler;
	onkeyup: EventHandler;
	onload: EventHandler;
	onloadeddata: EventHandler;
	onloadedmetadata: EventHandler;
	onloadstart: EventHandler;
	onmousedown: EventHandler;
	onmouseenter: EventHandler;
	onmouseleave: EventHandler;
	onmousemove: EventHandler;
	onmouseout: EventHandler;
	onmouseover: EventHandler;
	onmouseup: EventHandler;
	onpause: EventHandler;
	onplay: EventHandler;
	onplaying: EventHandler;
	onprogress: EventHandler;
	onratechange: EventHandler;
	onreset: EventHandler;
	onresize: EventHandler;
	onscroll: EventHandler;
	onsecuritypolicyviolation: EventHandler;
	onseeked: EventHandler;
	onseeking: EventHandler;
	onselect: EventHandler;
	onslotchange: EventHandler;
	onstalled: EventHandler;
	onsubmit: EventHandler<SubmitEvent>;
	onsuspend: EventHandler;
	ontimeupdate: EventHandler;
	ontoggle: EventHandler;
	onvolumechange: EventHandler;
	onwaiting: EventHandler;
	onwebkitanimationend: EventHandler;
	onwebkitanimationiteration: EventHandler;
	onwebkitanimationstart: EventHandler;
	onwebkittransitionend: EventHandler;
	onwheel: EventHandler;
}

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#windoweventhandlers */
export interface WindowEventHandlers {
	onafterprint: EventHandler;
	onbeforeprint: EventHandler;
	onbeforeunload: OnBeforeUnloadEventHandler;
	onhashchange: EventHandler;
	onlanguagechange: EventHandler;
	onmessage: EventHandler;
	onmessageerror: EventHandler;
	onoffline: EventHandler;
	ononline: EventHandler;
	onpagehide: EventHandler;
	onpageshow: EventHandler;
	onpopstate: EventHandler;
	onrejectionhandled: EventHandler;
	onstorage: EventHandler;
	onunhandledrejection: EventHandler;
	onunload: EventHandler;
}

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#documentandelementeventhandlers */
export interface DocumentAndElementEventHandlers {
	oncopy: EventHandler;
	oncut: EventHandler;
	onpaste: EventHandler;
}

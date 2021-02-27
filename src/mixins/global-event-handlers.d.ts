import type { Event } from '../event';
import type { FormDataEvent, SubmitEvent } from '../html';

// TODO: add concrete events where appropriate
export interface GlobalEventHandlers {
	onabort: Event.Handler | null;
	onauxclick: Event.Handler | null;
	onblur: Event.Handler | null;
	oncancel: Event.Handler | null;
	oncanplay: Event.Handler | null;
	oncanplaythrough: Event.Handler | null;
	onchange: Event.Handler | null;
	onclick: Event.Handler | null;
	onclose: Event.Handler | null;
	oncontextmenu: Event.Handler | null;
	oncuechange: Event.Handler | null;
	ondblclick: Event.Handler | null;
	ondrag: Event.Handler | null;
	ondragend: Event.Handler | null;
	ondragenter: Event.Handler | null;
	ondragleave: Event.Handler | null;
	ondragover: Event.Handler | null;
	ondragstart: Event.Handler | null;
	ondrop: Event.Handler | null;
	ondurationchange: Event.Handler | null;
	onemptied: Event.Handler | null;
	onended: Event.Handler | null;
	onerror: Event.Handler.OnError | null;
	onfocus: Event.Handler | null;
	onformdata: Event.Handler<FormDataEvent> | null;
	oninput: Event.Handler | null;
	oninvalid: Event.Handler | null;
	onkeydown: Event.Handler | null;
	onkeypress: Event.Handler | null;
	onkeyup: Event.Handler | null;
	onload: Event.Handler | null;
	onloadeddata: Event.Handler | null;
	onloadedmetadata: Event.Handler | null;
	onloadstart: Event.Handler | null;
	onmousedown: Event.Handler | null;
	onmouseenter: Event.Handler | null;
	onmouseleave: Event.Handler | null;
	onmousemove: Event.Handler | null;
	onmouseout: Event.Handler | null;
	onmouseover: Event.Handler | null;
	onmouseup: Event.Handler | null;
	onpause: Event.Handler | null;
	onplay: Event.Handler | null;
	onplaying: Event.Handler | null;
	onprogress: Event.Handler | null;
	onratechange: Event.Handler | null;
	onreset: Event.Handler | null;
	onresize: Event.Handler | null;
	onscroll: Event.Handler | null;
	onsecuritypolicyviolation: Event.Handler | null;
	onseeked: Event.Handler | null;
	onseeking: Event.Handler | null;
	onselect: Event.Handler | null;
	onslotchange: Event.Handler | null;
	onstalled: Event.Handler | null;
	onsubmit: Event.Handler<SubmitEvent> | null;
	onsuspend: Event.Handler | null;
	ontimeupdate: Event.Handler | null;
	ontoggle: Event.Handler | null;
	onvolumechange: Event.Handler | null;
	onwaiting: Event.Handler | null;
	onwebkitanimationend: Event.Handler | null;
	onwebkitanimationiteration: Event.Handler | null;
	onwebkitanimationstart: Event.Handler | null;
	onwebkittransitionend: Event.Handler | null;
	onwheel: Event.Handler | null;
}
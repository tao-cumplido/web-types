import type { DOMStringMap } from '../collections';
import type { Event, EventHandler } from '../dom';
import type { HTMLFormElement } from './elements';
import type { FormDataEvent } from './form-data-event';
import type { SubmitEvent } from './submit-event';
import type { ValidityState } from './validity-state';

/** @spec https://html.spec.whatwg.org/multipage/interaction.html#focusoptions */
export interface FocusOptions {
	preventScroll?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement */
export interface HTMLOrSVGElement {
	readonly dataset: DOMStringMap;
	nonce: string;

	autofocus: boolean;
	tabIndex: number;

	focus(options?: FocusOptions): void;
	blur(): void;
}

/** @spec https://html.spec.whatwg.org/multipage/interaction.html#elementcontenteditable */
export interface ElementContentEditable {
	readonly isContentEditable: boolean;
	contentEditable: '' | `${boolean}` | 'inherit';
	enterKeyHint: '' | 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
	inputMode: '' | 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

/** @spec https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils */
export interface HTMLHyperlinkElementUtils {
	readonly origin: string;
	href: string;
	protocol: string;
	username: string;
	password: string;
	host: string;
	hostname: string;
	port: '' | `${number}`;
	pathname: string;
	search: string;
	hash: string;
}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#selectionmode */
export type SelectionMode = 'select' | 'start' | 'end' | 'preserve';

/** @nonStandard */
export interface HTMLFormControlUtils {
	formAction: string;
	formEnctype: HTMLFormElement.Encoding;
	formMethod: HTMLFormElement.Method;
	formNoValidate: boolean;
	formTarget: string;
}

/** @nonStandard */
export interface HTMLFormValidationUtils {
	readonly willValidate: boolean;
	readonly validity: ValidityState;
	readonly validationMessage: string;

	checkValidity(): boolean;
	reportValidity(): boolean;
}

/** @nonStandard */
export interface HTMLFormCustomValidationUtils extends HTMLFormValidationUtils {
	setCustomValidity(error: string): void;
}

/** @nonStandard */
export interface HTMLFormInputUtils {
	autocomplete: string;
	required: boolean;
}

/** @nonStandard */
export interface HTMLFormTextUtils<Optional extends null> {
	dirName: string;
	maxLength: number;
	minLength: number;
	placeholder: string;
	readOnly: boolean;

	selectionStart: number | Optional;
	selectionEnd: number | Optional;
	selectionDirection: string | Optional;

	select(): void;
	setRangeText(replacement: string): void;
	setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
	setSelectionRange(start: number, end: number, direction?: string): void;
}

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onerroreventhandlernonnull */
export type OnErrorEventHandlerNonNull = (
	event: Event | string,
	source?: string,
	lineno?: number,
	colno?: number,
	error?: Error,
) => unknown;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onerroreventhandler */
export type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandlernonnull */
export type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandler */
export type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;

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

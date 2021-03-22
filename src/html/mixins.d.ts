import type { ImageBitmap, ImageBitmapOptions, ImageBitmapSource } from '../canvas';
import type { DOMStringMap } from '../collections';
import type { EventHandler } from '../dom';
import type { RequestInfo, RequestInit, Response } from '../fetch';
import type { VoidFunction } from '../web-idl';
import type { HTMLFormElement } from './elements';
import type { ErrorEvent } from './error-event';
import type { MessageEvent } from './message-event';
import type {
	FocusOptions,
	FrameRequestCallback,
	OnBeforeUnloadEventHandler,
	OnErrorEventHandler,
	PostMessageOptions,
	SelectionMode,
	Serializable,
	Transferable,
} from './types';
import type {
	DragEvent,
	FormDataEvent,
	HashChangeEvent,
	MimeTypeArray,
	PageTransitionEvent,
	PluginArray,
	PopStateEvent,
	SubmitEvent,
	ValidityState,
} from './window';
import type { Storage } from './window/storage';
import type { StorageEvent } from './window/storage-event';

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
	ondrag: EventHandler<DragEvent>;
	ondragend: EventHandler<DragEvent>;
	ondragenter: EventHandler<DragEvent>;
	ondragleave: EventHandler<DragEvent>;
	ondragover: EventHandler<DragEvent>;
	ondragstart: EventHandler<DragEvent>;
	ondrop: EventHandler<DragEvent>;
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
	onhashchange: EventHandler<HashChangeEvent>;
	onlanguagechange: EventHandler;
	onmessage: EventHandler;
	onmessageerror: EventHandler;
	onoffline: EventHandler;
	ononline: EventHandler;
	onpagehide: EventHandler<PageTransitionEvent>;
	onpageshow: EventHandler<PageTransitionEvent>;
	onpopstate: EventHandler<PopStateEvent>;
	onrejectionhandled: EventHandler;
	onstorage: EventHandler<StorageEvent>;
	onunhandledrejection: EventHandler;
	onunload: EventHandler;
}

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#documentandelementeventhandlers */
export interface DocumentAndElementEventHandlers {
	oncopy: EventHandler;
	oncut: EventHandler;
	onpaste: EventHandler;
}

/**
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope-mixin
 * @spec https://fetch.spec.whatwg.org/#fetch-method
 */
export interface WindowOrWorkerGlobalScope {
	readonly origin: string;
	readonly isSecureContext: boolean;
	readonly crossOriginIsolated: boolean;

	btoa(data: string): string;
	atob(data: string): string;

	setTimeout<Args extends unknown[]>(
		handler: (...arguments: Args) => unknown,
		timeout?: number,
		...arguments: Args
	): number;
	setTimeout(code: string, timeout?: number): number;
	clearTimeout(handle?: number): void;
	setInterval<Args extends unknown[]>(
		handler: (...arguments: Args) => unknown,
		timeout?: number,
		...arguments: Args
	): number;
	setInterval(code: string, timeout?: number): number;
	clearInterval(handle?: number): void;

	queueMicrotask(callback: VoidFunction): void;

	createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
	createImageBitmap(
		image: ImageBitmapSource,
		sx: number,
		sy: number,
		sw: number,
		sh: number,
		options?: ImageBitmapOptions,
	): Promise<ImageBitmap>;

	fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

/** @spec https://html.spec.whatwg.org/multipage/system-state.html#client-identification */
export interface NavigatorID {
	readonly appCodeName: 'Mozilla';
	readonly appName: 'Netscape';
	readonly appVersion: string;
	readonly platform: string;
	readonly product: 'Gecko';
	readonly userAgent: string;
}

export namespace NavigatorID {
	export interface Window {
		readonly productSub: '20030107' | '20100101';
		readonly vendor: 'Google Inc.' | '' | 'Apple Computer, Inc.';
		readonly vendorSub: '';

		/** @deprecated */
		readonly oscpu?: string;
		/** @deprecated */
		taintEnabled?(): false;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/system-state.html#language-preferences */
export interface NavigatorLanguage {
	readonly language: string;
	readonly languages: readonly string[];
}

/** @spec https://html.spec.whatwg.org/multipage/system-state.html#navigator.online */
export interface NavigatorOnLine {
	readonly onLine: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/system-state.html#custom-handlers */
export interface NavigatorContentUtils {
	registerProtocolHandler?(scheme: string, url: string): void;
	unregisterProtocolHandler?(scheme: string, url: string): void;
}

/** @spec https://html.spec.whatwg.org/multipage/system-state.html#cookies */
export interface NavigatorCookies {
	readonly cookieEnabled: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animationframeprovider */
export interface AnimationFrameProvider {
	requestAnimationFrame(callback: FrameRequestCallback): number;
	cancelAnimationFrame(handle: number): void;
}

/** @nonStandard */
export interface MessageEventUtils {
	onmessage: EventHandler<MessageEvent>;
	onmessageerror: EventHandler<MessageEvent>;
}

/** @nonStandard */
export interface PostMessageUtils {
	postMessage(message: Serializable, transfer: Transferable[]): void;
	postMessage(message: Serializable, options?: PostMessageOptions): void;
}

/** @spec https://html.spec.whatwg.org/multipage/workers.html#the-abstractworker-mixin */
export interface AbstractWorker {
	onerror: EventHandler<ErrorEvent>;
}

/** @spec https://html.spec.whatwg.org/multipage/workers.html#navigator.hardwareconcurrency */
export interface NavigatorConcurrentHardware {
	readonly hardwareConcurrency: number;
}

/** @spec https://html.spec.whatwg.org/multipage/webstorage.html#the-sessionstorage-attribute */
export interface WindowSessionStorage {
	readonly sessionStorage: Storage.NamedProperties;
}

/** @spec https://html.spec.whatwg.org/multipage/webstorage.html#the-localstorage-attribute */
export interface WindowLocalStorage {
	readonly localStorage: Storage.NamedProperties;
}

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#navigatorplugins
 */
export interface NavigatorPlugins {
	/** @deprecated */
	readonly plugins: PluginArray;
	/** @deprecated */
	readonly mimeTypes: MimeTypeArray;
	/** @deprecated */
	javaEnabled(): false;
}

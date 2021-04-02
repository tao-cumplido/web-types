import type { ImageBitmap, ImageBitmapOptions, ImageBitmapSource } from '../canvas';
import type { DOMStringMap } from '../collections';
import type { AnimationEvent, TransitionEvent } from '../css';
import type { Event, EventHandler, EventHandlerMap } from '../dom';
import type { RequestInfo, RequestInit, Response } from '../fetch';
import type { PointerEvent } from '../pointer-events';
import type { FocusEvent, InputEvent, KeyboardEvent, MouseEvent, WheelEvent } from '../ui-events';
import type { VoidFunction } from '../web-idl';
import type { CloseEvent } from './close-event';
import type { HTMLFormElement } from './elements';
import type { ErrorEvent } from './error-event';
import type { MessageEvent } from './message-event';
import type { PromiseRejectionEvent } from './promise-rejection-event';
import type {
	FocusOptions,
	FrameRequestCallback,
	PostMessageOptions,
	SelectionMode,
	Serializable,
	Transferable,
} from './types';
import type {
	BeforeUnloadEvent,
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

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement
 */
export interface HTMLOrSVGElement {
	readonly dataset: DOMStringMap;
	nonce: string;

	autofocus: boolean;
	tabIndex: number;

	focus(options?: FocusOptions): void;
	blur(): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/interaction.html#elementcontenteditable
 */
export interface ElementContentEditable {
	readonly isContentEditable: boolean;
	contentEditable: '' | `${boolean}` | 'inherit';
	enterKeyHint: '' | 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
	inputMode: '' | 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils
 */
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

export interface HTMLFormControlUtils {
	formAction: string;
	formEnctype: HTMLFormElement.Encoding;
	formMethod: HTMLFormElement.Method;
	formNoValidate: boolean;
	formTarget: string;
}

export interface HTMLFormValidationUtils {
	readonly willValidate: boolean;
	readonly validity: ValidityState;
	readonly validationMessage: string;

	checkValidity(): boolean;
	reportValidity(): boolean;
}

export interface HTMLFormCustomValidationUtils extends HTMLFormValidationUtils {
	setCustomValidity(error: string): void;
}

export interface HTMLFormInputUtils {
	autocomplete: string;
	required: boolean;
}

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

export interface GlobalEventHandlerTypes {
	abort: Event;
	auxclick: PointerEvent;
	blur: FocusEvent;
	cancel: Event;
	canplay: Event;
	canplaythrough: Event;
	change: Event;
	click: PointerEvent;
	close: Event | CloseEvent;
	contextmenu: PointerEvent;
	cuechange: Event;
	dblclick: MouseEvent;
	drag: DragEvent;
	dragend: DragEvent;
	dragenter: DragEvent;
	dragleave: DragEvent;
	dragover: DragEvent;
	dragstart: DragEvent;
	drop: DragEvent;
	durationchange: Event;
	emptied: Event;
	ended: Event;
	error: Event;
	focus: FocusEvent;
	formdata: FormDataEvent;
	input: InputEvent;
	invalid: Event;
	keydown: KeyboardEvent;
	/** @deprecated */
	keypress: KeyboardEvent;
	keyup: KeyboardEvent;
	load: Event;
	loadeddata: Event;
	loadedmetadata: Event;
	loadstart: Event;
	mousedown: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
	mousemove: MouseEvent;
	mouseout: MouseEvent;
	mouseover: MouseEvent;
	mouseup: MouseEvent;
	pause: Event;
	play: Event;
	playing: Event;
	progress: Event;
	ratechange: Event;
	reset: Event;
	resize: Event;
	scroll: Event;
	securitypolicyviolation: Event;
	seeked: Event;
	seeking: Event;
	select: Event;
	slotchange: Event;
	stalled: Event;
	submit: SubmitEvent;
	suspend: Event;
	timeupdate: Event;
	toggle: Event;
	volumechange: Event;
	waiting: Event;
	/** @deprecated */
	webkitAnimationEnd: AnimationEvent;
	/** @deprecated */
	webkitAnimationIteration: AnimationEvent;
	/** @deprecated */
	webkitAnimationStart: AnimationEvent;
	/** @deprecated */
	webkitTransitionEnd: TransitionEvent;
	wheel: WheelEvent;
	animationstart: AnimationEvent;
	animationiteration: AnimationEvent;
	animationend: AnimationEvent;
	animationcancel: AnimationEvent;
	transitionrun: TransitionEvent;
	transitionstart: TransitionEvent;
	transitionend: TransitionEvent;
	transitioncancel: TransitionEvent;
}

export interface GlobalEventTypes extends GlobalEventHandlerTypes {
	focusin: FocusEvent;
	focusout: FocusEvent;
	beforeinput: InputEvent;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers
 * @spec https://drafts.csswg.org/css-animations-1/#interface-globaleventhandlers
 * @spec https://drafts.csswg.org/css-transitions-1/#interface-globaleventhandlers-idl
 * @spec https://w3c.github.io/uievents/
 */
export interface GlobalEventHandlers extends EventHandlerMap<GlobalEventHandlerTypes> {}

export interface WindowEventTypes {
	afterprint: Event;
	beforeprint: Event;
	beforeunload: BeforeUnloadEvent;
	hashchange: HashChangeEvent;
	languagechange: Event;
	message: MessageEvent;
	messageerror: MessageEvent;
	offline: Event;
	online: Event;
	pagehide: PageTransitionEvent;
	pageshow: PageTransitionEvent;
	popstate: PopStateEvent;
	rejectionhandled: PromiseRejectionEvent;
	storage: StorageEvent;
	unhandledrejection: PromiseRejectionEvent;
	unload: Event;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#windoweventhandlers
 */
export interface WindowEventHandlers extends EventHandlerMap<WindowEventTypes> {}

export interface DocumentAndElementEventTypes {
	copy: Event;
	cut: Event;
	paste: Event;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#documentandelementeventhandlers
 */
export interface DocumentAndElementEventHandlers extends EventHandlerMap<DocumentAndElementEventTypes> {}

export interface DocumentAndWindowEventTypes {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	DOMContentLoaded: Event;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope-mixin
 * @spec https://fetch.spec.whatwg.org/#fetch-method
 */
export interface WindowOrWorkerGlobalScope extends ConsoleNamespace {
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

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/system-state.html#client-identification
 */
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

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/system-state.html#language-preferences
 */
export interface NavigatorLanguage {
	readonly language: string;
	readonly languages: readonly string[];
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/system-state.html#navigator.online
 */
export interface NavigatorOnLine {
	readonly onLine: boolean;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/system-state.html#custom-handlers
 */
export interface NavigatorContentUtils {
	registerProtocolHandler?(scheme: string, url: string): void;
	unregisterProtocolHandler?(scheme: string, url: string): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/system-state.html#cookies
 */
export interface NavigatorCookies {
	readonly cookieEnabled: boolean;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animationframeprovider
 */
export interface AnimationFrameProvider {
	requestAnimationFrame(callback: FrameRequestCallback): number;
	cancelAnimationFrame(handle: number): void;
}

export interface MessageEventTypes {
	message: MessageEvent;
	messageerror: MessageEvent;
}

export interface MessageEventHandlers extends EventHandlerMap<MessageEventTypes> {}

export interface PostMessageUtils {
	postMessage(message: Serializable, transfer: Transferable[]): void;
	postMessage(message: Serializable, options?: PostMessageOptions): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/workers.html#the-abstractworker-mixin
 */
export interface AbstractWorker {
	onerror: EventHandler<ErrorEvent>;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/workers.html#navigator.hardwareconcurrency
 */
export interface NavigatorConcurrentHardware {
	readonly hardwareConcurrency: number;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webstorage.html#the-sessionstorage-attribute
 */
export interface WindowSessionStorage {
	readonly sessionStorage: Storage.NamedProperties;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webstorage.html#the-localstorage-attribute
 */
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

/** @spec https://console.spec.whatwg.org/#console-namespace */
export interface ConsoleNamespace {
	console: {
		assert(condition?: boolean, ...data: unknown[]): void;
		clear(): void;
		debug(...data: unknown[]): void;
		error(...data: unknown[]): void;
		info(...data: unknown[]): void;
		log(...data: unknown[]): void;
		table(tabularData: unknown, properties?: string[]): void;
		trace(...data: unknown[]): void;
		warn(...data: unknown[]): void;
		dir(item?: unknown, options?: Record<PropertyKey, unknown>): void;
		dirxml(...data: unknown[]): void;

		count(label?: string): void;
		countReset(label?: string): void;

		group(...data: unknown[]): void;
		groupCollapsed(...data: unknown[]): void;
		groupEnd(): void;

		time(label?: string): void;
		timeLog(label?: string, ...data: unknown[]): void;
		timeEnd(label?: string): void;
	};
}

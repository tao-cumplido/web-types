import type { ImageBitmap, ImageData, OffscreenCanvas } from '../canvas';
import type { Event } from '../dom';
import type { DOMHighResTimeStamp } from '../high-resolution-time';
import type { ReadableStream } from '../streams';
import type { DOMException } from '../web-idl';
import type { MessagePort } from './message-port';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/interaction.html#focusoptions
 */
export interface FocusOptions {
	preventScroll?: boolean;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#selectionmode
 */
export type SelectionMode = 'select' | 'start' | 'end' | 'preserve';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#onerroreventhandlernonnull
 */
export type OnErrorEventHandlerNonNull = (
	event: Event | string,
	source?: string,
	lineno?: number,
	colno?: number,
	error?: unknown,
) => unknown;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#onerroreventhandler
 */
export type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandlernonnull
 */
export type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandler
 */
export type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute enumerated attribute
 */
export type CORSSettingsAttribute = 'anonymous' | 'use-credentials';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attribute
 */
export type LazyLoadingAttribute = 'lazy' | 'eager';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/structured-data.html#transferable extended IDL attribute
 */
export type Transferable = ArrayBuffer | MessagePort | OffscreenCanvas | ImageBitmap | ReadableStream;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/structured-data.html#serializable extended IDL attribute
 */
export type Serializable =
	| undefined
	| null
	| boolean
	| number
	| bigint
	| string
	/* eslint-disable @typescript-eslint/ban-types */
	| Boolean
	| Number
	| BigInt
	| String
	/* eslint-enable @typescript-eslint/ban-types */
	| Date
	| RegExp
	| SharedArrayBuffer
	| ArrayBuffer
	| ArrayBufferView
	| Map<Serializable, Serializable>
	| Set<Serializable>
	| Serializable[]
	// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
	| { [key: string]: Serializable }
	| Error
	| ImageData
	| ImageBitmap
	| DOMException;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webappapis.html#timerhandler
 */
export type TimerHandler = string | ((...arguments: unknown[]) => unknown);

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#framerequestcallback
 */
export type FrameRequestCallback = (time: DOMHighResTimeStamp) => void;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/web-messaging.html#postmessageoptions
 */
export interface PostMessageOptions {
	transfer?: Transferable[];
}

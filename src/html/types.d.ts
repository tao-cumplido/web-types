import type { ImageBitmap, ImageData, OffscreenCanvas } from '../canvas';
import type { Event } from '../dom';
import type { DOMException } from '../web-idl';
import type { MessagePort } from './message-port';

/** @spec https://html.spec.whatwg.org/multipage/interaction.html#focusoptions */
export interface FocusOptions {
	preventScroll?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#selectionmode */
export type SelectionMode = 'select' | 'start' | 'end' | 'preserve';

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

/** @spec https://html.spec.whatwg.org/multipage/structured-data.html#transferable extended IDL attribute */
export type Transferable = ArrayBuffer | MessagePort | OffscreenCanvas | ImageBitmap;

/** @spec https://html.spec.whatwg.org/multipage/structured-data.html#serializable extended IDL attribute */
export type Serializable =
	| undefined
	| null
	| boolean
	| number
	| bigint
	| string
	| boolean
	| number
	| bigint
	| string
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

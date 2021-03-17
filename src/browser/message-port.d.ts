import type { ImageBitmap, OffscreenCanvas } from '../canvas';
import type { EventTarget } from '../dom';

// not specced as type but as extended IDL attribute on the following interfaces
export type Transferable = ArrayBuffer | MessagePort | OffscreenCanvas | ImageBitmap;

/** @spec https://html.spec.whatwg.org/multipage/web-messaging.html#postmessageoptions */
export interface PostMessageOptions {
	transfer?: Transferable[];
}

/** @spec https://html.spec.whatwg.org/multipage/web-messaging.html#message-ports */
export interface MessagePort extends MessagePort.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace MessagePort {
	export interface Prototype extends EventTarget.Prototype {
		// TODO
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

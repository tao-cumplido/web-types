import type { EventTarget } from '../dom';
import type { MessageEventHandlers, MessageEventTypes, PostMessageUtils } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/web-messaging.html#message-ports */
export interface MessagePort extends MessagePort.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace MessagePort {
	export interface Prototype extends EventTarget.Prototype<MessageEventTypes>, MessageEventHandlers, PostMessageUtils {
		start(): void;
		close(): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

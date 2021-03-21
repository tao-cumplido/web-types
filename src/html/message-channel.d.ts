import type { MessagePort } from './message-port';

/** @spec https://html.spec.whatwg.org/multipage/web-messaging.html#message-channels */
export interface MessageChannel extends MessageChannel.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace MessageChannel {
	export interface Prototype {
		readonly port1: MessagePort;
		readonly port2: MessagePort;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(): MessageChannel;
	}
}

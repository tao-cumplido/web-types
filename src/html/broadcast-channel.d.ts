import type { EventTarget } from '../dom';
import type { MessageEventUtils } from './mixins';
import type { Serializable } from './types';

/** @spec https://html.spec.whatwg.org/multipage/web-messaging.html#broadcasting-to-other-browsing-contexts */
export interface BroadcastChannel extends BroadcastChannel.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace BroadcastChannel {
	export interface Prototype extends EventTarget.Prototype, MessageEventUtils {
		readonly name: string;

		postMessage(message: Serializable): void;
		close(): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(name: string): BroadcastChannel;
	}
}

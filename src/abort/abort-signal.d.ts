import type { EventHandler, EventTarget } from '../event';

/** @spec https://dom.spec.whatwg.org/#interface-AbortSignal */
export interface AbortSignal extends AbortSignal.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace AbortSignal {
	export interface Prototype extends EventTarget.Prototype {
		readonly aborted: boolean;
		onabort: EventHandler;
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

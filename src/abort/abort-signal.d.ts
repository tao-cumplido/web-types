import type { Event, EventTarget } from '../event';

export interface AbortSignal extends AbortSignal.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace AbortSignal {
	export interface Prototype extends EventTarget.Prototype {
		readonly aborted: boolean;
		onabort: Event.Handler<this> | null;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

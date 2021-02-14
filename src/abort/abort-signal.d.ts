import type { EventTarget } from '../event';
import type { EventHandler } from '../html';

export interface AbortSignal extends AbortSignal.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace AbortSignal {
	export interface Prototype extends EventTarget.Prototype {
		readonly aborted: boolean;
		onabort: EventHandler<this> | null;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): AbortSignal;
	}
}

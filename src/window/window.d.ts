import type { Event, EventTarget } from '../event';

export interface Window extends EventTarget, Window.Prototype {}

/**
 * @exposed Window
 */
export namespace Window {
	export interface Prototype extends EventTarget.Prototype {
		/** @deprecated */
		readonly event?: Event;
	}

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): Window;
	}
}

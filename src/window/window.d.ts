import type { Event, EventTarget, EventTargetConstructor } from '../event';

export interface Window extends EventTarget {
	/** @deprecated */
	readonly event?: Event;
}

export interface WindowConstructor extends EventTargetConstructor {
	prototype: Window;
	/** @abstract */
	new (): Window;
}

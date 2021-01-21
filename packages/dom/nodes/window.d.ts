import type { Event, EventTarget } from '../event';
import type { EventTargetConstructor } from '../event/event-target';

export interface Window extends EventTarget {
	/** @deprecated */
	readonly event?: Event;
}

export interface WindowConstructor extends EventTargetConstructor {
	prototype: Window;
	/** @abstract */
	new (): Window;
}

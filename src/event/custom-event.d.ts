/** @Window @Worker */

import type { Event, EventConstructor, EventInit } from './event';
import type { EventTarget } from './event-target';

export interface CustomEventInit<Detail> extends EventInit {
	detail?: Detail;
}

export interface CustomEvent<CurrentTarget extends EventTarget | null = EventTarget | null, Detail = unknown>
	extends Event<CurrentTarget> {
	readonly detail: Detail;

	/** @deprecated */
	initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: Detail): void;
}

export interface CustomEventConstructor extends EventConstructor {
	prototype: CustomEvent;
	new <CurrentTarget extends EventTarget | null = EventTarget | null, Detail = unknown>(
		type: string,
		eventInitDict?: CustomEventInit<Detail>,
	): CustomEvent<CurrentTarget, Detail>;
}

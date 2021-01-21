/** @Window @Worker */

import type { Event, EventInit } from './event';
import type { EventTarget } from './event-target';

export declare interface CustomEventInit<Detail> extends EventInit {
	detail?: Detail;
}

export declare class CustomEvent<
	CurrentTarget extends EventTarget | null = EventTarget | null,
	Detail = unknown
> extends Event<CurrentTarget> {
	readonly detail: Detail;

	constructor(type: string, eventInitDict?: CustomEventInit<Detail>);

	/** @deprecated */
	initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: Detail): void;
}

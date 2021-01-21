/** @Window @Worker @AudioWorklet */

import type { EventTarget } from './event-target';

export declare interface EventPhases {
	readonly NONE: 0;
	readonly CAPTURING_PHASE: 1;
	readonly AT_TARGET: 2;
	readonly BUBBLING_PHASE: 3;
}

export declare interface EventInit {
	bubbles?: boolean;
	cancelable?: boolean;
	composed?: boolean;
}

export declare interface Event extends EventPhases {}
export declare class Event<CurrentTarget extends EventTarget | null = EventTarget | null> {
	readonly type: string;
	readonly target: EventTarget | null;
	readonly eventPhase: EventPhases[keyof EventPhases];
	readonly currentTarget: CurrentTarget;
	readonly bubbles: boolean;
	readonly cancelable: boolean;
	readonly defaultPrevented: boolean;
	readonly composed: boolean;
	readonly isTrusted: boolean;
	readonly timeStamp: number;

	/** @deprecated */
	readonly srcElement: EventTarget | null;
	/** @deprecated */
	readonly returnValue: boolean;
	/** @deprecated */
	cancelBubble: boolean;

	constructor(type: string, eventInitDict?: EventInit);

	composedPath(): EventTarget[];
	stopPropagation(): void;
	stopImmediatePropagation(): void;
	preventDefault(): void;

	/** @deprecated */
	initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
}

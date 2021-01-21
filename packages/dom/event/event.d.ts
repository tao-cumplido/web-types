/** @Window @Worker @AudioWorklet */

import type { EventTarget } from './event-target';

export interface EventPhases {
	readonly NONE: 0;
	readonly CAPTURING_PHASE: 1;
	readonly AT_TARGET: 2;
	readonly BUBBLING_PHASE: 3;
}

export interface EventInit {
	bubbles?: boolean;
	cancelable?: boolean;
	composed?: boolean;
}

type Target = EventTarget | null;

export interface Event<CurrentTarget extends Target = Target> extends EventPhases {
	readonly type: string;
	readonly target: Target;
	readonly eventPhase: EventPhases[keyof EventPhases];
	readonly currentTarget: CurrentTarget;
	readonly bubbles: boolean;
	readonly cancelable: boolean;
	readonly defaultPrevented: boolean;
	readonly composed: boolean;
	readonly isTrusted: boolean;
	readonly timeStamp: number;

	/** @deprecated */
	readonly srcElement: Target;
	/** @deprecated */
	readonly returnValue: boolean;
	/** @deprecated */
	cancelBubble: boolean;

	composedPath(): EventTarget[];
	stopPropagation(): void;
	stopImmediatePropagation(): void;
	preventDefault(): void;

	/** @deprecated */
	initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
}

export interface EventConstructor extends Function, EventPhases {
	prototype: Event;
	new <CurrentTarget extends Target = Target>(type: string, eventInitDict?: EventInit): Event<CurrentTarget>;
}

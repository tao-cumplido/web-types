import type { Event, EventInit } from './event';
import type { EventTarget } from './event-target';

export interface CustomEventInit<Detail> extends EventInit {
	detail?: Detail;
}

// prettier-ignore
export interface CustomEvent<
	CurrentTarget extends EventTarget = EventTarget,
	Detail = unknown
> extends
CustomEvent.Interface<CurrentTarget, Detail> {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CustomEvent {
	export interface Prototype<
		// prettier-ignore
		CurrentTarget extends EventTarget = EventTarget,
		Detail = unknown
	> extends Event.Prototype<CurrentTarget> {
		readonly detail: Detail;

		/** @deprecated */
		initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: Detail): void;
	}

	export type Interface<
		// prettier-ignore
		CurrentTarget extends EventTarget = EventTarget,
		Detail = unknown
	> = Prototype<CurrentTarget, Detail> & Event.Interface<CurrentTarget>;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new <CurrentTarget extends EventTarget = EventTarget, Detail = unknown>(
			type: string,
			eventInitDict?: CustomEventInit<Detail>,
		): CustomEvent<CurrentTarget, Detail>;
	}
}

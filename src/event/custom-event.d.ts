import type { Event } from './event';
import type { EventTarget } from './event-target';

// prettier-ignore
export interface CustomEvent<
	Detail = unknown,
	CurrentTarget extends EventTarget = EventTarget,
> extends
CustomEvent.Interface<Detail, CurrentTarget> {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CustomEvent {
	export interface Init<Detail> extends Event.Init {
		detail?: Detail;
	}

	export interface Prototype<
		// prettier-ignore
		Detail = unknown,
		CurrentTarget extends EventTarget = EventTarget
	> extends Event.Prototype<CurrentTarget> {
		readonly detail: Detail;

		/** @deprecated */
		initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: Detail): void;
	}

	export type Interface<
		// prettier-ignore
		Detail = unknown,
		CurrentTarget extends EventTarget = EventTarget
	> = Prototype<Detail, CurrentTarget> & Event.Interface<CurrentTarget>;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new <Detail = unknown>(type: string, eventInitDict?: Init<Detail>): CustomEvent<Detail>;
	}
}

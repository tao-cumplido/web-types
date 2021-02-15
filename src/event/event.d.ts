import type { ValueOf } from '../@types';
import type { EventTarget } from './event-target';

export interface Event<CurrentTarget extends EventTarget = EventTarget> extends Event.Interface<CurrentTarget> {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace Event {
	export type Handler<
		CurrentTarget extends EventTarget = EventTarget,
		AbstractEvent extends Event<CurrentTarget> = Event<CurrentTarget>
	> = (this: CurrentTarget, event: AbstractEvent) => unknown;

	export namespace Handler {
		export type OnError<CurrentTarget extends EventTarget = EventTarget> = (
			this: CurrentTarget,
			event: Event<CurrentTarget> | string,
			source?: string,
			lineno?: number,
			colno?: number,
			error?: Error,
		) => unknown;

		export type OnBeforeUnload<CurrentTarget extends EventTarget = EventTarget> = (
			this: CurrentTarget,
			event: Event<CurrentTarget>,
		) => string | null;
	}

	export interface Init {
		bubbles?: boolean;
		cancelable?: boolean;
		composed?: boolean;
	}

	export interface PhasesLegacyEnum {
		readonly NONE: 0;
		readonly CAPTURING_PHASE: 1;
		readonly AT_TARGET: 2;
		readonly BUBBLING_PHASE: 3;
	}

	export interface Prototype<CurrentTarget extends EventTarget = EventTarget> extends PhasesLegacyEnum {
		readonly type: string;
		readonly target: EventTarget | null;
		readonly eventPhase: ValueOf<PhasesLegacyEnum>;
		readonly currentTarget: CurrentTarget | null;
		readonly bubbles: boolean;
		readonly cancelable: boolean;
		readonly defaultPrevented: boolean;
		readonly composed: boolean;
		readonly timeStamp: number;

		/** @deprecated */
		readonly srcElement: EventTarget | null;
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

	export type Interface<CurrentTarget extends EventTarget = EventTarget> = Prototype<CurrentTarget> & {
		readonly isTrusted: boolean;
	};

	export interface Static extends PhasesLegacyEnum {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict?: Init): Event;
	}
}

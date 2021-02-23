import type { ValueOf } from '../@types';
import type { EventTarget } from './event-target';

export interface Event extends Event.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace Event {
	export type Handler<AbstractEvent extends Event = Event> = (event: AbstractEvent) => unknown;

	export namespace Handler {
		export type OnError = (
			event: Event | string,
			source?: string,
			lineno?: number,
			colno?: number,
			error?: Error,
		) => unknown;

		export type OnBeforeUnload = (event: Event) => string | null;
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

	export interface Prototype extends PhasesLegacyEnum {
		readonly type: string;
		readonly target: EventTarget | null;
		readonly eventPhase: ValueOf<PhasesLegacyEnum>;
		readonly currentTarget: EventTarget | null;
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

	export type Interface = Prototype & {
		readonly isTrusted: boolean;
	};

	export interface Static extends PhasesLegacyEnum {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict?: Init): Event;
	}
}

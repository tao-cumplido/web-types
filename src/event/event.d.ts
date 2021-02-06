import type { ValueOf } from '../@types';
import type { EventTarget } from './event-target';

export interface EventInit {
	bubbles?: boolean;
	cancelable?: boolean;
	composed?: boolean;
}

export interface Event<CurrentTarget extends Event.Target = Event.Target> extends Event.Interface<CurrentTarget> {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace Event {
	export type Target = EventTarget | null;

	export interface PhasesLegacyEnum {
		readonly NONE: 0;
		readonly CAPTURING_PHASE: 1;
		readonly AT_TARGET: 2;
		readonly BUBBLING_PHASE: 3;
	}

	export interface Prototype<CurrentTarget extends Target = Target> extends PhasesLegacyEnum {
		readonly type: string;
		readonly target: Target;
		readonly eventPhase: ValueOf<PhasesLegacyEnum>;
		readonly currentTarget: CurrentTarget;
		readonly bubbles: boolean;
		readonly cancelable: boolean;
		readonly defaultPrevented: boolean;
		readonly composed: boolean;
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

	export type Interface<CurrentTarget extends Target = Target> = Prototype<CurrentTarget> & {
		readonly isTrusted: boolean;
	};

	export interface Static extends PhasesLegacyEnum {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new <CurrentTarget extends Target = Target>(type: string, eventInitDict?: EventInit): Event<CurrentTarget>;
	}
}

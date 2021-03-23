import type { ValueOf } from '../@types';
import type { EventTarget } from './event-target';

/**
 * @idlType
 * @spec https://dom.spec.whatwg.org/#dictdef-eventinit
 */
export interface EventInit extends Partial<Event.State> {}

/** @spec https://dom.spec.whatwg.org/#interface-event */
export interface Event extends Event.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace Event {
	export interface State {
		bubbles: boolean;
		cancelable: boolean;
		composed: boolean;
	}

	export interface Phases {
		readonly NONE: 0;
		readonly CAPTURING_PHASE: 1;
		readonly AT_TARGET: 2;
		readonly BUBBLING_PHASE: 3;
	}

	export interface Prototype extends Readonly<State>, Phases {
		readonly type: string;
		readonly target: EventTarget | null;
		readonly eventPhase: ValueOf<Phases>;
		readonly currentTarget: EventTarget | null;
		readonly defaultPrevented: boolean;
		readonly timeStamp: number;

		/** @deprecated */
		readonly srcElement: EventTarget | null;

		// the return value is specified as type boolean but the BeforeUnloadEvent overrides to string
		// to keep BeforeUnloadEvent assignable to Event it is typed as unknown here
		// it shouldn't be used for new projects anyway
		/** @deprecated */
		returnValue: unknown;

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

	export interface Static extends Phases {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: EventInit): Event;
	}
}

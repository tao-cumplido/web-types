import type { AbortSignal } from '../abort';
import type { EventHandler } from '../html';
import type { Event } from './event';

export type EventListener<
	CurrentTarget extends EventTarget = EventTarget,
	AbstractEvent extends Event<CurrentTarget> = Event<CurrentTarget>,
	Handler extends EventHandler<CurrentTarget, AbstractEvent> = EventHandler<CurrentTarget, AbstractEvent>
> = Handler | { handleEvent: Handler };

export interface EventListenerOptions {
	capture?: boolean;
}

export interface AddEventListenerOptions extends EventListenerOptions {
	passive?: boolean;
	once?: boolean;
	signal?: AbortSignal | null;
}

export interface EventTarget extends EventTarget.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed AudioWorklet
 */
export namespace EventTarget {
	type ExtractEvents<T extends EventTarget> = {
		[P in keyof T]: P extends `on${infer K}`
			? K extends Lowercase<K>
				? NonNullable<T[P]> extends EventHandler<T>
					? K
					: never
				: never
			: never;
	}[keyof T];

	type HandlerToListener<T> = NonNullable<T> extends EventHandler<infer CurrentTarget, infer AbstractEvent>
		? EventListener<CurrentTarget, AbstractEvent, NonNullable<T>>
		: never;

	export interface Prototype {
		addEventListener<E extends ExtractEvents<this>>(
			type: E,
			callback?: HandlerToListener<this[`on${E}`]>,
			options?: AddEventListenerOptions | boolean,
		): void;

		addEventListener(type: string, callback?: EventListener<this>, options?: AddEventListenerOptions | boolean): void;

		removeEventListener<E extends ExtractEvents<this>>(
			type: E,
			callback?: HandlerToListener<this[`on${E}`]>,
			options?: EventListenerOptions | boolean,
		): void;

		removeEventListener(type: string, callback?: EventListener<this>, options?: EventListenerOptions | boolean): void;

		dispatchEvent(event: Event<this>): boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): EventTarget;
	}
}

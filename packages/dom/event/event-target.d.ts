/** @Window @Worker @AudioWorklet */

import type { AbortSignal } from '../abort';
import type { Event } from './event';

export type EventHandler<
	CurrentTarget extends EventTarget | null = EventTarget | null,
	AbstractEvent extends Event<CurrentTarget> = Event<CurrentTarget>
> = (this: CurrentTarget, event: AbstractEvent) => void;

export type EventListener<
	CurrentTarget extends EventTarget | null = EventTarget | null,
	AbstractEvent extends Event<CurrentTarget> = Event<CurrentTarget>
> = EventHandler<CurrentTarget, AbstractEvent> | { handleEvent: EventHandler<CurrentTarget, AbstractEvent> };

export interface EventListenerOptions {
	capture?: boolean;
}

export interface AddEventListenerOptions extends EventListenerOptions {
	passive?: boolean;
	once?: boolean;
	signal?: AbortSignal | null;
}

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
	? EventListener<CurrentTarget, AbstractEvent>
	: never;

type ExtractEventType<T> = T extends never ? string : T;

export interface EventTarget {
	addEventListener<E extends ExtractEvents<this>>(
		type: E,
		callback?: HandlerToListener<this[`on${E}`]>,
		options?: AddEventListenerOptions | boolean,
	): void;

	removeEventListener<E extends ExtractEvents<this>>(
		type: E,
		callback?: HandlerToListener<this[`on${E}`]>,
		options?: EventListenerOptions | boolean,
	): void;

	dispatchEvent(event: Event<this>): boolean;
}

export interface EventTargetConstructor extends Function {
	prototype: EventTarget;
	new (): EventTarget;
}

import type { FontFaceSource } from '../../css';
import type { Event, EventHandlerMap, EventTarget } from '../../dom';
import type { WindowOrWorkerGlobalScope } from '../mixins';
import type { PromiseRejectionEvent } from '../promise-rejection-event';
import type { OnErrorEventHandler } from '../types';
import type { WorkerLocation } from './worker-location';
import type { WorkerNavigator } from './worker-navigator';

/** @spec https://html.spec.whatwg.org/multipage/workers.html#the-workerglobalscope-common-interface */
export interface WorkerGlobalScope extends WorkerGlobalScope.Interface {}

/** @exposed Worker */
export namespace WorkerGlobalScope {
	export interface EventTypes {
		error: Event;
		languagechange: Event;
		offline: Event;
		online: Event;
		rejectionhandled: PromiseRejectionEvent;
		unhandledrejection: PromiseRejectionEvent;
	}

	export interface Prototype<EventMap extends Record<keyof EventMap, Event> = Record<never, never>>
		extends
			EventTarget.Prototype<EventMap & EventTypes>,
			EventHandlerMap<EventTypes>,
			WindowOrWorkerGlobalScope,
			FontFaceSource
	{
		/** @globalThis */
		readonly self: this;
		readonly location: WorkerLocation;
		readonly navigator: WorkerNavigator;

		onerror: OnErrorEventHandler;

		importScripts(...urls: string[]): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

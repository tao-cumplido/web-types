import type { Event, EventHandlerMap, EventTarget } from '../dom';
import type { AbstractWorker, PostMessageUtils } from '../html';

/**
 * @idlType
 * @spec https://w3c.github.io/ServiceWorker/#enumdef-serviceworkerstate
 */
export type ServiceWorkerState =
	| 'parsed'
	| 'installing'
	| 'installed'
	| 'activating'
	| 'activated'
	| 'redundant';

/** @spec https://w3c.github.io/ServiceWorker/#serviceworker */
export interface ServiceWorker extends ServiceWorker.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @secureContext
 */
export namespace ServiceWorker {
	export interface EventTypes {
		statechange: Event;
	}

	export interface Prototype
		extends EventTarget.Prototype<EventTypes>, EventHandlerMap<EventTypes>, PostMessageUtils, AbstractWorker
	{
		readonly scriptURL: string;
		readonly state: ServiceWorkerState;
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

import type { EventHandlerMap } from '../../dom';
import type { MessageEvent } from '../message-event';
import type { WorkerGlobalScope } from './worker-global-scope';

/** @spec https://html.spec.whatwg.org/multipage/workers.html#shared-workers-and-the-sharedworkerglobalscope-interface */
export interface SharedWorkerGlobalScope extends SharedWorkerGlobalScope.Interface {}

/**
 * @exposed SharedWorker
 * @global Worker
 * @global SharedWorker
 */
export namespace SharedWorkerGlobalScope {
	export interface EventTypes {
		connect: MessageEvent;
	}

	export interface Prototype extends WorkerGlobalScope.Prototype<EventTypes>, EventHandlerMap<EventTypes> {
		readonly name: string;
		close(): void;
	}

	export type Interface = Prototype & WorkerGlobalScope.Interface;

	export interface Static extends WorkerGlobalScope.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

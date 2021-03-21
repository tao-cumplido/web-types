import type { EventHandler } from '../../dom';
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
	export interface Prototype extends WorkerGlobalScope.Prototype<SharedWorkerGlobalScope> {
		readonly name: string;
		onconnect: EventHandler<MessageEvent>;
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

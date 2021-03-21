import type { AnimationFrameProvider, MessageEventUtils, PostMessageUtils } from '../mixins';
import type { WorkerGlobalScope } from './worker-global-scope';

/** @spec https://html.spec.whatwg.org/multipage/workers.html#dedicated-workers-and-the-dedicatedworkerglobalscope-interface */
export interface DedicatedWorkerGlobalScope extends DedicatedWorkerGlobalScope.Interface {}

/**
 * @exposed DedicatedWorker
 * @global Worker
 * @global DedicatedWorker
 */
export namespace DedicatedWorkerGlobalScope {
	export interface Prototype
		extends
			WorkerGlobalScope.Prototype<DedicatedWorkerGlobalScope>,
			AnimationFrameProvider,
			MessageEventUtils,
			PostMessageUtils
	{
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

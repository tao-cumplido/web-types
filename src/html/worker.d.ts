import type { EventTarget } from '../dom';
import type { RequestCredentials } from '../fetch';
import type { AbstractWorker, MessageEventUtils, PostMessageUtils } from './mixins';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/workers.html#workertype
 */
export type WorkerType = 'classic' | 'module';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/workers.html#workeroptions
 */
export interface WorkerOptions {
	type?: WorkerType;
	credentials?: RequestCredentials;
	name?: string;
}

/** @spec https://html.spec.whatwg.org/multipage/workers.html#dedicated-workers-and-the-worker-interface */
export interface Worker extends Worker.Interface {}

/**
 * @exposed Window
 * @exposed DedicatedWorker
 * @exposed SharedWorker
 */
export namespace Worker {
	export interface Prototype extends EventTarget.Prototype, MessageEventUtils, PostMessageUtils, AbstractWorker {
		terminate(): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(scriptURL: string, options?: WorkerOptions): Worker;
	}
}

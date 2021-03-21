import type { EventTarget } from '../dom';
import type { MessagePort } from './message-port';
import type { AbstractWorker } from './mixins';
import type { WorkerOptions } from './worker';

/** @spec https://html.spec.whatwg.org/multipage/workers.html#shared-workers-and-the-sharedworker-interface */
export interface SharedWorker extends SharedWorker.Interface {}

/** @exposed Window */
export namespace SharedWorker {
	export interface Prototype extends EventTarget.Prototype, AbstractWorker {
		readonly port: MessagePort;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(scriptURL: string, options?: string | WorkerOptions): SharedWorker;
	}
}

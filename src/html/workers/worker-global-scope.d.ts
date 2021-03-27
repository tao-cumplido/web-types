import type { FontFaceSource } from '../../css';
import type { EventHandler, EventTarget } from '../../dom';
import type { WindowOrWorkerGlobalScope } from '../mixins';
import type { PromiseRejectionEvent } from '../promise-rejection-event';
import type { OnErrorEventHandler } from '../types';
import type { WorkerLocation } from './worker-location';
import type { WorkerNavigator } from './worker-navigator';

/** @spec https://html.spec.whatwg.org/multipage/workers.html#the-workerglobalscope-common-interface */
export interface WorkerGlobalScope extends WorkerGlobalScope.Interface {}

/** @exposed Worker */
export namespace WorkerGlobalScope {
	export interface Prototype<GlobalThis extends WorkerGlobalScope = never>
		extends EventTarget.Prototype<GlobalThis>, WindowOrWorkerGlobalScope, FontFaceSource
	{
		/** @globalThis */
		readonly self: this;
		readonly location: WorkerLocation;
		readonly navigator: WorkerNavigator;

		onerror: OnErrorEventHandler;
		onlanguagechange: EventHandler;
		onoffline: EventHandler;
		ononline: EventHandler;
		onrejectionhandled: EventHandler<PromiseRejectionEvent>;
		onunhandledrejection: EventHandler<PromiseRejectionEvent>;

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

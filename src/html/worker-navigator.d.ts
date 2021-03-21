import type { NavigatorConcurrentHardware, NavigatorID, NavigatorLanguage, NavigatorOnLine } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/workers.html#the-workernavigator-object */
export interface WorkerNavigator extends WorkerNavigator.Interface {}

/** @exposed Worker */
export namespace WorkerNavigator {
	export interface Prototype extends NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorConcurrentHardware {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { ConsoleNamespace } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/worklets.html#worklets-global */
export interface WorkletGlobalScope extends WorkletGlobalScope.Interface {}

/**
 * @exposed Worklet
 * @secureContext
 */
export namespace WorkletGlobalScope {
	export interface Prototype extends ConsoleNamespace {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

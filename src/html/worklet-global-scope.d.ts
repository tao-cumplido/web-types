/** @spec https://html.spec.whatwg.org/multipage/worklets.html#worklets-global */
export interface WorkletGlobalScope extends WorkletGlobalScope.Interface {}

/**
 * @exposed Worklet
 * @secureContext
 */
export namespace WorkletGlobalScope {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Prototype {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

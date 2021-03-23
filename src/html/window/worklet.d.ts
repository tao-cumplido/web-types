import type { RequestCredentials } from '../../fetch';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/worklets.html#workletoptions
 */
export interface WorkletOptions {
	credentials?: RequestCredentials;
}

/** @spec https://html.spec.whatwg.org/multipage/worklets.html#worklets-worklet */
export interface Worklet extends Worklet.Interface {}

/**
 * @exposed Window
 * @secureContext
 */
export namespace Worklet {
	export interface Prototype {
		addModule(moduleURL: string, options?: WorkletOptions): Promise<void>;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { AbortSignal } from '../abort';

export interface AbortController extends AbortController.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace AbortController {
	export interface Prototype {
		readonly signal: AbortSignal;
		abort(): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): AbortController;
	}
}

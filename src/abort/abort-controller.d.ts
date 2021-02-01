/** @Window @Worker */

import type { AbortSignal } from '../abort';

export interface AbortController {
	readonly signal: AbortSignal;
	abort(): void;
}

export interface AbortControllerConstructor extends Function {
	prototype: AbortController;
	new (): AbortController;
}

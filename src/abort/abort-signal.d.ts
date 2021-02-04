/** @Window @Worker */

import type { EventHandler, EventTarget, EventTargetConstructor } from '../event';

export interface AbortSignal extends EventTarget {
	readonly aborted: boolean;
	onabort: EventHandler<this> | null;
}

export interface AbortSignalConstructor extends EventTargetConstructor {
	prototype: AbortSignal;
	/** @abstract */
	new (): AbortSignal;
}

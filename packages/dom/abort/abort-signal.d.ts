/** @Window @Worker */

import type { EventHandler, EventTarget } from '../event';
import type { EventTargetConstructor } from '../event/event-target';

export interface AbortSignal extends EventTarget {
	readonly aborted: boolean;
	onabort: EventHandler<this> | null;
}

export interface AbortSignalConstructor extends EventTargetConstructor {
	prototype: AbortSignal;
	/** @abstract */
	new (): AbortSignal;
}

/** @Window @Worker */

import type { EventHandler } from '../event';
import { EventTarget } from '../event';

export declare abstract class AbortSignal extends EventTarget {
	readonly aborted: boolean;
	onabort: EventHandler<this> | null;
}

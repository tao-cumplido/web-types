import type { Event } from '../event';
import { EventTarget } from '../event';

export declare abstract class Window extends EventTarget {
	/** @deprecated */
	readonly event?: Event;
}

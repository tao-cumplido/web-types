import type { Event } from '../event';

// TODO: add concrete events where appropriate
export interface DocumentAndElementEventHandlers {
	oncopy: Event.Handler | null;
	oncut: Event.Handler | null;
	onpaste: Event.Handler | null;
}

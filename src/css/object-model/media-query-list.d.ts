import type { EventHandlerMap, EventListener, EventTarget } from '../../dom';
import type { MediaQueryListEvent } from './media-query-list-event';

/** @spec https://drafts.csswg.org/cssom-view-1/#mediaquerylist */
export interface MediaQueryList extends MediaQueryList.Interface {}

/** @exposed Window */
export namespace MediaQueryList {
	export interface EventTypes {
		change: MediaQueryListEvent;
	}

	export interface Prototype extends EventTarget.Prototype<EventTypes>, EventHandlerMap<EventTypes> {
		readonly media: string;
		readonly matches: boolean;

		addListener(callback: EventListener<MediaQueryListEvent> | null): void;
		removeListener(callback: EventListener<MediaQueryListEvent> | null): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

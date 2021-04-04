import type { Event, EventInit } from '../../dom';

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom-view-1/#dictdef-mediaquerylisteventinit
 */
export interface MediaQueryListEventInit extends Partial<MediaQueryListEvent.State>, EventInit {}

/** @spec https://drafts.csswg.org/cssom-view-1/#mediaquerylistevent */
export interface MediaQueryListEvent extends MediaQueryListEvent.Interface {}

/** @exposed Window */
export namespace MediaQueryListEvent {
	export interface State {
		media: string;
		matches: boolean;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
	}
}

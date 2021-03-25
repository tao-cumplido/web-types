import type { Event, EventInit } from '../../dom';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dictdef-animationplaybackeventinit
 */
export interface AnimationPlaybackEventInit extends Partial<AnimationPlaybackEvent.State>, EventInit {}

/** @spec https://drafts.csswg.org/web-animations-1/#the-animationplaybackevent-interface */
export interface AnimationPlaybackEvent extends AnimationPlaybackEvent.Interface {}

/** @exposed Window */
export namespace AnimationPlaybackEvent {
	export interface State {
		currentTime: number | null;
		timelineTime: number | null;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
	}
}

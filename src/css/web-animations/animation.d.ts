import type { EventHandlerMap, EventTarget } from '../../dom';
import type { AnimationEffect } from './animation-effect';
import type { AnimationPlaybackEvent } from './animation-playback-event';
import type { AnimationTimeline } from './animation-timeline';
import type { AnimationPlayState, AnimationReplaceState } from './types';

/** @spec https://drafts.csswg.org/web-animations-1/#the-animation-interface */
export interface Animation extends Animation.Interface {}

/** @exposed Window */
export namespace Animation {
	export interface EventTypes {
		finish: AnimationPlaybackEvent;
		cancel: AnimationPlaybackEvent;
		remove: AnimationPlaybackEvent;
	}

	export interface Prototype extends EventTarget.Prototype<EventTypes>, EventHandlerMap<EventTypes> {
		readonly playState: AnimationPlayState;
		readonly replaceState: AnimationReplaceState;
		readonly pending: boolean;
		readonly ready: Promise<Animation>;
		readonly finished: Promise<Animation>;

		id: string;
		effect: AnimationEffect | null;
		timeline: AnimationTimeline | null;
		startTime: number | null;
		currentTime: number | null;
		playbackRate: number;

		cancel(): void;
		finish(): void;
		play(): void;
		pause(): void;
		updatePlaybackRate(playbackRate: number): void;
		reverse(): void;
		persist(): void;
		commitStyles(): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation;
	}
}

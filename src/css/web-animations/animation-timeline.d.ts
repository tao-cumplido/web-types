import type { TimelinePhase } from './types';

/** @spec https://drafts.csswg.org/web-animations-1/#the-animationtimeline-interface */
export interface AnimationTimeline extends AnimationTimeline.Interface {}

/** @exposed Window */
export namespace AnimationTimeline {
	export interface Prototype {
		readonly currentTime: number | null;
		readonly phase: TimelinePhase;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { DOMHighResTimeStamp } from '../../high-resolution-time';
import type { AnimationTimeline } from './animation-timeline';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dictdef-documenttimelineoptions
 */
export interface DocumentTimelineOptions {
	originTime?: DOMHighResTimeStamp;
}

/** @spec https://drafts.csswg.org/web-animations-1/#the-documenttimeline-interface */
export interface DocumentTimeline extends DocumentTimeline.Interface {}

/** @exposed Window */
export namespace DocumentTimeline {
	export interface Prototype extends AnimationTimeline.Prototype {}

	export type Interface = Prototype & AnimationTimeline.Interface;

	export interface Static extends AnimationTimeline.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(options?: DocumentTimelineOptions): DocumentTimeline;
	}
}

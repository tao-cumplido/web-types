import type { Event, EventInit } from '../dom';
import type { AudioTrack } from './audio-track';
import type { TextTrack } from './text-track';
import type { VideoTrack } from './video-track';

/** @spec https://html.spec.whatwg.org/multipage/media.html#the-trackevent-interface */
export interface TrackEvent extends TrackEvent.Interface {}

/** @exposed Window */
export namespace TrackEvent {
	export interface Init extends EventInit {
		track?: VideoTrack | AudioTrack | TextTrack | null;
	}

	export interface Prototype extends Event.Prototype {
		readonly track: VideoTrack | AudioTrack | TextTrack | null;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: Init): TrackEvent;
	}
}

import type { Event } from '../event';
import type { AudioTrack } from './audio-track';
import type { TextTrack } from './text-track';
import type { VideoTrack } from './video-track';

export interface TrackEvent extends TrackEvent.Interface {}

/**
 * @exposed Window
 */
export namespace TrackEvent {
	export interface Init extends Event.Init {
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
		new (type: string, eventInitDict?: Init): TrackEvent;
	}
}

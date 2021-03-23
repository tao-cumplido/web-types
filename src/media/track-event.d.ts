import type { Event, EventInit } from '../dom';
import type { AudioTrack } from './audio-track';
import type { TextTrack } from './text-track';
import type { VideoTrack } from './video-track';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/media.html#trackeventinit
 */
export interface TrackEventInit extends Partial<TrackEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/media.html#the-trackevent-interface */
export interface TrackEvent extends TrackEvent.Interface {}

/** @exposed Window */
export namespace TrackEvent {
	export interface State {
		track: VideoTrack | AudioTrack | TextTrack | null;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: TrackEventInit): TrackEvent;
	}
}

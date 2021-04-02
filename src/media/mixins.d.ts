import type { Event, EventHandlerMap } from '../dom';
import type { IndexedIterable } from '../iterable';
import type { TrackEvent } from './track-event';

export interface MediaTrack<Kind extends string = string> {
	readonly id: string;
	readonly kind: Kind;
	readonly label: string;
	readonly language: string;
}

export interface MediaTrackListEvents {
	change: Event;
	addtrack: TrackEvent;
	removetrack: TrackEvent;
}

export interface MediaTrackList<Track extends MediaTrack>
	extends IndexedIterable<Track>, EventHandlerMap<MediaTrackListEvents>
{
	readonly length: number;
	getTrackById(id: string): Track | null;
}

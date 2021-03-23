import type { EventHandler } from '../dom';
import type { IndexedIterable } from '../iterable';
import type { TrackEvent } from './track-event';

export interface MediaTrack<Kind extends string = string> {
	readonly id: string;
	readonly kind: Kind;
	readonly label: string;
	readonly language: string;
}

export interface MediaTrackList<Track extends MediaTrack> extends IndexedIterable<Track> {
	readonly length: number;

	onchange: EventHandler;
	onaddtrack: EventHandler<TrackEvent>;
	onremovetrack: EventHandler<TrackEvent>;

	getTrackById(id: string): Track | null;
}

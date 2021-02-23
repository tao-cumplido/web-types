import type { Event } from '../event';
import type { IndexedIterable } from '../iterable';
import type { TrackEvent } from '../media';

export interface MediaTrack<Kind extends string = string> {
	readonly id: string;
	readonly kind: Kind;
	readonly label: string;
	readonly language: string;
}

export namespace MediaTrack {
	export type AudioVideoKind =
		| 'alternative'
		| 'captions'
		| 'descriptions'
		| 'main'
		| 'main-desc'
		| 'sign'
		| 'subtitles'
		| 'translation'
		| 'commentary'
		| '';
}

export interface MediaTrackList<Track extends MediaTrack> extends IndexedIterable<Track> {
	readonly length: number;

	onchange: Event.Handler;
	onaddtrack: Event.Handler<TrackEvent>;
	onremovetrack: Event.Handler<TrackEvent>;

	getTrackById(id: string): Track | null;
}

import type { EventTarget } from '../dom';
import type { AudioVideoKind, MediaTrack, MediaTrackList } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/media.html#videotrack */
export interface VideoTrack extends VideoTrack.Interface {}

/** @exposed Window */
export namespace VideoTrack {
	export interface Prototype extends MediaTrack<AudioVideoKind> {
		selected: boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/media.html#videotracklist */
export interface VideoTrackList extends VideoTrackList.Interface {}

/** @exposed Window */
export namespace VideoTrackList {
	export interface Prototype extends EventTarget.Prototype, MediaTrackList<VideoTrack> {
		readonly selectedIndex: number;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

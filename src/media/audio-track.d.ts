import type { EventTarget } from '../dom';
import type { MediaTrack, MediaTrackList, MediaTrackListEvents } from './mixins';
import type { AudioVideoKind } from './types';

/** @spec https://html.spec.whatwg.org/multipage/media.html#audiotrack */
export interface AudioTrack extends AudioTrack.Interface {}

/** @exposed Window */
export namespace AudioTrack {
	export interface Prototype extends MediaTrack<AudioVideoKind> {
		enabled: boolean;
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

/** @spec https://html.spec.whatwg.org/multipage/media.html#audiotracklist */
export interface AudioTrackList extends AudioTrackList.Interface {}

/** @exposed Window */
export namespace AudioTrackList {
	export interface Prototype extends EventTarget.Prototype<MediaTrackListEvents>, MediaTrackList<AudioTrack> {}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

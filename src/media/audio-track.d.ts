import type { EventTarget } from '../event';
import type { AudioVideoKind, MediaTrack, MediaTrackList } from './mixins';

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
		new (): never;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/media.html#audiotracklist */
export interface AudioTrackList extends AudioTrackList.Interface {}

/** @exposed Window */
export namespace AudioTrackList {
	export interface Prototype extends EventTarget.Prototype, MediaTrackList<AudioTrack> {}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

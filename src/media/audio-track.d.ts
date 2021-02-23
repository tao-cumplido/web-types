import type { EventTarget } from '../event';
import type { MediaTrack, MediaTrackList } from '../mixins';

export interface AudioTrack extends AudioTrack.Interface {}

/**
 * @exposed Window
 */
export namespace AudioTrack {
	export interface Prototype extends MediaTrack<MediaTrack.AudioVideoKind> {
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

export interface AudioTrackList extends AudioTrackList.Interface {}

/**
 * @exposed Window
 */
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

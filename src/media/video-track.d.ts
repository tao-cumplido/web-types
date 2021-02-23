import type { EventTarget } from '../event';
import type { MediaTrack, MediaTrackList } from '../mixins';

export interface VideoTrack extends VideoTrack.Interface {}

/**
 * @exposed Window
 */
export namespace VideoTrack {
	export interface Prototype extends MediaTrack<MediaTrack.AudioVideoKind> {
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

export interface VideoTrackList extends VideoTrackList.Interface {}

/**
 * @exposed Window
 */
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

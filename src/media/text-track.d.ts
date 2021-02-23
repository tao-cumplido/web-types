import type { Event, EventTarget } from '../event';
import type { IndexedIterable } from '../iterable';
import type { MediaTrack, MediaTrackList } from '../mixins';

export interface TextTrackCue extends TextTrackCue.Interface {}

/**
 * @exposed Window
 */
export namespace TextTrackCue {
	export interface Prototype extends EventTarget.Prototype {
		readonly track: TextTrack | null;

		id: string;
		startTime: number;
		endTime: number;
		pauseOnExit: boolean;

		onenter: Event.Handler;
		onexit: Event.Handler;
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

export interface TextTrackCueList extends TextTrackCueList.Interface {}

/**
 * @exposed Window
 */
export namespace TextTrackCueList {
	export interface Prototype extends IndexedIterable<TextTrackCue> {
		readonly length: number;
		getCueById(id: string): TextTrackCue | null;
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

export interface TextTrack extends TextTrack.Interface {}

/**
 * @exposed Window
 */
export namespace TextTrack {
	export type Mode = 'disabled' | 'hidden' | 'showing';

	export type Kind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

	export interface Prototype extends EventTarget.Prototype, MediaTrack<Kind> {
		readonly inBandMetadataTrackDispatchType: string;

		readonly cues: TextTrackCueList | null;
		readonly activeCues: TextTrackCueList | null;

		mode: Mode;

		oncuechange: Event.Handler;

		addCue(cue: TextTrackCue): void;
		removeCue(cue: TextTrackCue): void;
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

export interface TextTrackList extends TextTrackList.Interface {}

/**
 * @exposed Window
 */
export namespace TextTrackList {
	export interface Prototype extends EventTarget.Prototype, MediaTrackList<TextTrack> {}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

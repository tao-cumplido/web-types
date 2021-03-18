import type { EventHandler, EventTarget } from '../dom';
import type { IndexedIterable } from '../iterable';
import type { MediaTrack, MediaTrackList } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/media.html#texttrackcue */
export interface TextTrackCue extends TextTrackCue.Interface {}

/** @exposed Window */
export namespace TextTrackCue {
	export interface Prototype extends EventTarget.Prototype {
		readonly track: TextTrack | null;

		id: string;
		startTime: number;
		endTime: number;
		pauseOnExit: boolean;

		onenter: EventHandler;
		onexit: EventHandler;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/media.html#texttrackcuelist */
export interface TextTrackCueList extends TextTrackCueList.Interface {}

/** @exposed Window */
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
		new(): never;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/media.html#texttrackmode */
export type TextTrackMode = 'disabled' | 'hidden' | 'showing';

/** @spec https://html.spec.whatwg.org/multipage/media.html#texttrackkind */
export type TextTrackKind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

/** @spec https://html.spec.whatwg.org/multipage/media.html#texttrack */
export interface TextTrack extends TextTrack.Interface {}

/** @exposed Window */
export namespace TextTrack {
	export interface Prototype extends EventTarget.Prototype, MediaTrack<TextTrackKind> {
		readonly inBandMetadataTrackDispatchType: string;

		readonly cues: TextTrackCueList | null;
		readonly activeCues: TextTrackCueList | null;

		mode: TextTrackMode;

		oncuechange: EventHandler;

		addCue(cue: TextTrackCue): void;
		removeCue(cue: TextTrackCue): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

/** @spec https://html.spec.whatwg.org/multipage/media.html#texttracklist */
export interface TextTrackList extends TextTrackList.Interface {}

/** @exposed Window */
export namespace TextTrackList {
	export interface Prototype extends EventTarget.Prototype, MediaTrackList<TextTrack> {}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

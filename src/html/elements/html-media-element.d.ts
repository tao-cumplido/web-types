import type { ValueOf } from '../../@types';
import type { Blob } from '../../file';
import type {
	AudioTrackList,
	MediaError,
	MediaSource,
	MediaStream,
	TextTrack,
	TextTrackKind,
	TextTrackList,
	TimeRanges,
	VideoTrackList,
} from '../../media';
import type { CORSSettingsAttribute } from '../types';
import type { HTMLElement } from './html-element';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/media.html#canplaytyperesult
 */
export type CanPlayTypeResult = '' | 'maybe' | 'probably';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/media.html#mediaprovider
 */
export type MediaProvider = MediaStream | MediaSource | Blob;

/** @spec https://html.spec.whatwg.org/multipage/media.html#media-elements */
export interface HTMLMediaElement extends HTMLMediaElement.Interface {}

/** @exposed Window */
export namespace HTMLMediaElement {
	export interface NetworkState {
		readonly NETWORK_EMPTY: 0;
		readonly NETWORK_IDLE: 1;
		readonly NETWORK_LOADING: 2;
		readonly NETWORK_NO_SOURCE: 3;
	}

	export interface ReadyState {
		readonly HAVE_NOTHING: 0;
		readonly HAVE_METADATA: 1;
		readonly HAVE_CURRENT_DATA: 2;
		readonly HAVE_FUTURE_DATA: 3;
		readonly HAVE_ENOUGH_DATA: 4;
	}

	export interface Prototype extends HTMLElement.Prototype, NetworkState, ReadyState {
		readonly error: MediaError | null;

		readonly currentSrc: string;
		readonly networkState: ValueOf<NetworkState>;
		readonly buffered: TimeRanges;

		readonly readyState: ValueOf<ReadyState>;
		readonly seeking: boolean;

		readonly duration: number;
		readonly paused: boolean;
		readonly played: TimeRanges;
		readonly seekable: TimeRanges;
		readonly ended: boolean;

		readonly audioTracks: AudioTrackList;
		readonly videoTracks: VideoTrackList;
		readonly textTracks: TextTrackList;

		src: string;
		srcObject: MediaProvider | null;
		crossOrigin: CORSSettingsAttribute | null;
		preload: 'none' | 'metadata' | 'auto';

		currentTime: number;
		defaultPlaybackRate: number;
		playbackRate: number;
		preservesPitch: boolean;
		autoplay: boolean;
		loop: boolean;

		controls: boolean;
		volume: number;
		muted: boolean;
		defaultMuted: boolean;

		load(): void;
		canPlayType(type: string): CanPlayTypeResult;

		fastSeek(time: number): void;
		getStartDate(): Date;
		play(): Promise<void>;
		pause(): void;

		addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static, NetworkState, ReadyState {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

import type { ValueOf } from '../../@types';
import type { TextTrack, TextTrackKind } from '../../media';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/media.html#the-track-element */
export interface HTMLTrackElement extends HTMLTrackElement.Interface {}

/** @exposed Window */
export namespace HTMLTrackElement {
	export interface ReadyState {
		readonly NONE: 0;
		readonly LOADING: 1;
		readonly LOADED: 2;
		readonly ERROR: 3;
	}

	export interface Prototype extends HTMLElement.Prototype, ReadyState {
		readonly readyState: ValueOf<ReadyState>;
		readonly track: TextTrack;

		kind: TextTrackKind;
		src: string;
		srclang: string;
		label: string;
		default: boolean;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static, ReadyState {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLTrackElement;
	}
}

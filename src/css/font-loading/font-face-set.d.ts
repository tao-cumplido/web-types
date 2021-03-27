import type { EventHandler, EventTarget } from '../../dom';
import type { SetLike } from '../../iterable';
import type { FontFace } from './font-face';
import type { FontFaceSetLoadEvent } from './font-face-set-load-event';

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-font-loading-3/#enumdef-fontfacesetloadstatus
 */
export type FontFaceSetLoadStatus = 'loading' | 'loaded';

/** @spec https://drafts.csswg.org/css-font-loading-3/#fontfaceset */
export interface FontFaceSet extends FontFaceSet.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace FontFaceSet {
	export interface Prototype extends EventTarget.Prototype, SetLike<FontFace, [font: FontFace]> {
		readonly ready: Promise<this>;
		readonly status: FontFaceSetLoadStatus;

		onloading: EventHandler<FontFaceSetLoadEvent>;
		onloadingdone: EventHandler<FontFaceSetLoadEvent>;
		onloadingerror: EventHandler<FontFaceSetLoadEvent>;

		load(font: string, text?: string): Promise<FontFace[]>;
		check(font: string, text?: string): boolean;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(initialFaces: FontFace[]): FontFaceSet;
	}
}

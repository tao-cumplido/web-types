import type { Event, EventInit } from '../../dom';
import type { FontFace } from './font-face';

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-font-loading-3/#dictdef-fontfacesetloadeventinit
 */
export interface FontFaceSetLoadEventInit extends EventInit {
	fontfaces: FontFace[];
}

/** @spec https://drafts.csswg.org/css-font-loading-3/#fontfacesetloadevent */
export interface FontFaceSetLoadEvent extends FontFaceSetLoadEvent.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace FontFaceSetLoadEvent {
	export interface Prototype extends Event.Prototype {
		readonly fontfaces: ReadonlyArray<Readonly<FontFace>>;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
	}
}

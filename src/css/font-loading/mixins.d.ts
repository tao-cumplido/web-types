import type { FontFaceSet } from './font-face-set';

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-font-loading-3/#font-face-source
 */
export interface FontFaceSource {
	readonly fonts: FontFaceSet;
}

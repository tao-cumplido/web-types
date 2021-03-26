/** @spec https://drafts.csswg.org/css-content-3/ */
export interface CSSContentProperties extends CSSContentProperties.Animatable {}

export namespace CSSContentProperties {
	export interface Animatable {
		'content': string;
		'quotes': string;
		'string-set': string;
		'bookmark-level': string;
		'bookmark-label': string;
		'bookmark-state': string;
	}
}

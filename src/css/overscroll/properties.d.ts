/** @spec https://drafts.csswg.org/css-overscroll-1/ */
export interface CSSOverscrollProperties extends CSSOverscrollProperties.Animatable {}

export namespace CSSOverscrollProperties {
	export interface Animatable {
		'overscroll-behavior': string;
		'overscroll-behavior-x': string;
		'overscroll-behavior-y': string;
		'overscroll-behavior-inline': string;
		'overscroll-behavior-block': string;
	}
}

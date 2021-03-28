/** @spec https://drafts.csswg.org/css-scroll-snap-1/ */
export interface CSSScrollSnapProperties extends CSSScrollSnapProperties.Animatable {}

export namespace CSSScrollSnapProperties {
	export interface Animatable {
		'scroll-snap-type': string;
		'scroll-padding': string;
		'scroll-margin': string;
		'scroll-snap-align': string;
		'scroll-snap-stop': string;
		'scroll-padding-top': string;
		'scroll-padding-right': string;
		'scroll-padding-bottom': string;
		'scroll-padding-left': string;
		'scroll-padding-inline-start': string;
		'scroll-padding-block-start': string;
		'scroll-padding-inline-end': string;
		'scroll-padding-block-end': string;
		'scroll-padding-inline': string;
		'scroll-padding-block': string;
		'scroll-margin-top': string;
		'scroll-margin-right': string;
		'scroll-margin-bottom': string;
		'scroll-margin-left': string;
		'scroll-margin-inline-start': string;
		'scroll-margin-block-start': string;
		'scroll-margin-inline-end': string;
		'scroll-margin-block-end': string;
		'scroll-margin-inline': string;
		'scroll-margin-block': string;
	}
}

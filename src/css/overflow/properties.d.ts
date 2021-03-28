/** @spec https://drafts.csswg.org/css-overflow-3/ */
export interface CSSOverflowProperties extends CSSOverflowProperties.Animatable {}

export namespace CSSOverflowProperties {
	export interface Animatable {
		'overflow-x': string;
		'overflow-y': string;
		'overflow': string;
		'overflow-clip-margin': string;
		'overflow-inline': string;
		'overflow-block': string;
		'text-overflow': string;
	}
}

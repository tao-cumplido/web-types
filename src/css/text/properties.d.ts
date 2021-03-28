/** @spec https://drafts.csswg.org/css-text-3/ */
export interface CSSTextProperties extends CSSTextProperties.Animatable {}

export namespace CSSTextProperties {
	export interface Animatable {
		'text-transform': string;
		'white-space': string;
		'tab-size': string;
		'word-break': string;
		'line-break': string;
		'hyphens': string;
		'overflow-wrap': string;
		'word-wrap': string;
		'text-align': string;
		'text-align-all': string;
		'text-align-last': string;
		'text-justify': string;
		'word-spacing': string;
		'letter-spacing': string;
		'text-indent': string;
		'hanging-punctuation': string;
	}
}

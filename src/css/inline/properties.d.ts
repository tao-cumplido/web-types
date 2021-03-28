/** @spec https://drafts.csswg.org/css-inline-3/ */
export interface CSSInlineProperties extends CSSInlineProperties.Animatable {}

export namespace CSSInlineProperties {
	export interface Animatable {
		'dominant-baseline': string;
		'vertical-align': string;
		'baseline-source': string;
		'alignment-baseline': string;
		/** @deprecated */
		'baseline-shift': string;
		'line-height': string;
	}
}

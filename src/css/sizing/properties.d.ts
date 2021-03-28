/**
 * @spec https://drafts.csswg.org/css-sizing-3/
 * @spec https://drafts.csswg.org/css-sizing-4/
 */
export interface CSSSizingProperties extends CSSSizingProperties.Animatable {}

export namespace CSSSizingProperties {
	export interface Animatable {
		'width': string;
		'height': string;
		'min-width': string;
		'min-height': string;
		'max-width': string;
		'max-height': string;
		'box-sizing': string;
		'aspect-ratio': string;
		'contain-intrinsic-size': string;
	}
}

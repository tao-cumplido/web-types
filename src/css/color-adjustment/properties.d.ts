/** @spec https://drafts.csswg.org/css-color-adjust-1/ */
export interface CSSColorAdjustmentProperties extends CSSColorAdjustmentProperties.Animatable {
	'forced-color-adjust': string;
}

export namespace CSSColorAdjustmentProperties {
	export interface Animatable {
		'color-scheme': string;
		'color-adjust': string;
	}
}

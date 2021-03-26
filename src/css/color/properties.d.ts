/** @spec https://drafts.csswg.org/css-color-4/ */
export interface CSSColorProperties extends CSSColorProperties.Animatable {}

export namespace CSSColorProperties {
	export interface Animatable {
		'color': string;
		'opacity': string;
	}
}

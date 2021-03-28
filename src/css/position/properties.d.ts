/** @spec https://drafts.csswg.org/css-position-3/ */
export interface CSSPositionProperties extends CSSPositionProperties.Animatable {}

export namespace CSSPositionProperties {
	export interface Animatable {
		'position': string;
		'top': string;
		'right': string;
		'bottom': string;
		'left': string;
		'inset-block-start': string;
		'inset-inline-start': string;
		'inset-block-end': string;
		'inset-inline-end': string;
		'inset-block': string;
		'inset-inline': string;
		'inset': string;
	}
}

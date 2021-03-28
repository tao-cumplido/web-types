/** @spec https://drafts.csswg.org/css-images-3/ */
export interface CSSImageProperties extends CSSImageProperties.Animatable {}

export namespace CSSImageProperties {
	export interface Animatable {
		'object-fit': string;
		'object-position': string;
		'image-orientation': string;
		'image-rendering': string;
	}
}

/** @spec https://drafts.csswg.org/css-lists-3/ */
export interface CSSListProperties extends CSSListProperties.Animatable {}

export namespace CSSListProperties {
	export interface Animatable {
		'list-style-image': string;
		'list-style-type': string;
		'list-style-position': string;
		'list-style': string;
		'marker-side': string;
		'counter-reset': string;
		'counter-increment': string;
		'counter-set': string;
	}
}

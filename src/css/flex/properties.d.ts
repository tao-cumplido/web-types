/** @spec https://drafts.csswg.org/css-flexbox-1/ */
export interface CSSFlexProperties extends CSSFlexProperties.Animatable {}

export namespace CSSFlexProperties {
	export interface Animatable {
		'flex-direction': string;
		'flex-wrap': string;
		'flex-flow': string;
		'order': string;
		'flex': string;
		'flex-grow': string;
		'flex-shrink': string;
		'flex-basis': string;
	}
}

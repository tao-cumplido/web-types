/**
 * @spec https://drafts.csswg.org/css-transforms-1/
 * @spec https://drafts.csswg.org/css-transforms-2/
 */
export interface CSSTransformProperties extends CSSTransformProperties.Animatable {}

export namespace CSSTransformProperties {
	export interface Animatable {
		'transform': string;
		'transform-origin': string;
		'transform-box': string;
		'translate': string;
		'scale': string;
		'rotate': string;
		'transform-style': string;
		'perspective': string;
		'perspective-origin': string;
		'backface-visibility': string;
	}
}

/**
 * @spec https://drafts.csswg.org/css-transitions-1/
 * @spec https://drafts.csswg.org/css-transitions-2/
 */
export interface CSSTransitionProperties extends CSSTransitionProperties.Animatable {}

export namespace CSSTransitionProperties {
	export interface Animatable {
		'transition-property': string;
		'transition-duration': string;
		'transition-timing-function': string;
		'transition-delay': string;
		'transition': string;
	}
}

/**
 * @spec https://drafts.csswg.org/css-backgrounds/
 * @spec https://drafts.csswg.org/css-backgrounds-4/
 */
export interface CSSBackgroundProperties extends CSSBackgroundProperties.Animatable {}

export namespace CSSBackgroundProperties {
	export interface Animatable {
		'background-color': string;
		'background-image': string;
		'background-repeat': string;
		'background-attachment': string;
		'background-position': string;
		'background-clip': string;
		'background-origin': string;
		'background-size': string;
		'background': string;

		'border-top-color': string;
		'border-right-color': string;
		'border-bottom-color': string;
		'border-left-color': string;
		'border-color': string;
		'border-top-style': string;
		'border-right-style': string;
		'border-bottom-style': string;
		'border-left-style': string;
		'border-style': string;
		'border-top-width': string;
		'border-right-width': string;
		'border-bottom-width': string;
		'border-left-width': string;
		'border-width': string;
		'border-top': string;
		'border-right': string;
		'border-bottom': string;
		'border-left': string;
		'border': string;

		'border-top-left-radius': string;
		'border-top-right-radius': string;
		'border-bottom-right-radius': string;
		'border-bottom-left-radius': string;
		'border-radius': string;

		'border-image-source': string;
		'border-image-slice': string;
		'border-image-width': string;
		'border-image-outset': string;
		'border-image-repeat': string;
		'border-image': string;

		'box-shadow': string;

		'background-position-x': string;
		'background-position-y': string;
	}
}

/** @spec https://drafts.csswg.org/css-box-4/ */
export interface CSSBoxProperties extends CSSBoxProperties.Animatable {}

export namespace CSSBoxProperties {
	export interface Animatable {
		'margin-top': string;
		'margin-right': string;
		'margin-bottom': string;
		'margin-left': string;
		'margin': string;
		'margin-trim': string;

		'padding-top': string;
		'padding-right': string;
		'padding-bottom': string;
		'padding-left': string;
		'padding': string;
	}
}

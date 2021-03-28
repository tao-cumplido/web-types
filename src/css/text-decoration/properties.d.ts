/** @spec https://drafts.csswg.org/css-text-decor-3/ */
export interface CSSTextDecorationProperties extends CSSTextDecorationProperties.Animatable {}

export namespace CSSTextDecorationProperties {
	export interface Animatable {
		'text-decoration-line': string;
		'text-decoration-style': string;
		'text-decoration-color': string;
		'text-decoration': string;
		'text-underline-position': string;
		'text-emphasis-style': string;
		'text-emphasis-color': string;
		'text-emphasis': string;
		'text-emphasis-position': string;
		'text-shadow': string;
	}
}

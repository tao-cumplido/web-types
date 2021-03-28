/** @spec https://drafts.csswg.org/css-page-3/ */
export interface CSSPagedMediaProperties extends CSSPagedMediaProperties.Animatable {}

export namespace CSSPagedMediaProperties {
	export interface Animatable {
		'page': string;
	}
}

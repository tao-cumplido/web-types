/**
 * @spec https://drafts.csswg.org/css-break-3/
 * @spec https://drafts.csswg.org/css-break-4/
 */
export interface CSSFragmentationProperties extends CSSFragmentationProperties.Animatable {}

export namespace CSSFragmentationProperties {
	export interface Animatable {
		'break-before': string;
		'break-after': string;
		'break-inside': string;
		'orphans': string;
		'widows': string;

		'box-decoration-break': string;

		/** @deprecated */
		'page-break-before': string;
		/** @deprecated */
		'page-break-after': string;
		/** @deprecated */
		'page-break-inside': string;
	}
}

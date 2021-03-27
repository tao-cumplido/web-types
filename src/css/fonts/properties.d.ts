/** @spec https://drafts.csswg.org/css-fonts-4/ */
export interface CSSFontProperties extends CSSFontProperties.Animatable {}

export namespace CSSFontProperties {
	export interface Animatable {
		'font-family': string;
		'font-weight': string;
		'font-stretch': string;
		'font-style': string;
		'font-size': string;
		'font-size-adjust': string;
		'font': string;
		'font-synthesis-weight': string;
		'font-synthesis-style': string;
		'font-synthesis-small-caps': string;
		'font-synthesis': string;
		'font-kerning': string;
		'font-variant-ligatures': string;
		'font-variant-position': string;
		'font-variant-caps': string;
		'font-variant-numeric': string;
		'font-variant-alternates': string;
		'font-variant-east-asian': string;
		'font-variant': string;
		'font-feature-settings': string;
		'font-language-override': string;
		'font-optical-sizing': string;
		'font-variation-settings': string;
		'font-palette': string;
		'font-variant-emoji': string;
	}
}

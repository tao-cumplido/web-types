/**
 * @spec https://drafts.csswg.org/css-shapes-1/
 * @spec https://drafts.csswg.org/css-shapes-2/
 */
export interface CSSShapeProperties extends CSSShapeProperties.Animatable {}

export namespace CSSShapeProperties {
	export interface Animatable {
		'shape-outside': string;
		'shape-inside': string;
		'shape-image-threshold': string;
		'shape-margin': string;
		'shape-padding': string;
	}
}

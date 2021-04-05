/** @spec https://drafts.csswg.org/css-tables-3/ */
export interface CSSTableProperties extends CSSTableProperties.Animatable {}

export namespace CSSTableProperties {
	export interface Animatable {
		'table-layout': string;
		'border-collapse': string;
		'border-spacing': string;
		'empty-cells': string;
	}
}

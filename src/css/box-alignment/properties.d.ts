/** @spec https://drafts.csswg.org/css-align-3/ */
export interface CSSBoxAlignmentProperties extends CSSBoxAlignmentProperties.Animatable {}

export namespace CSSBoxAlignmentProperties {
	export interface Animatable {
		'align-content': string;
		'justify-content': string;
		'place-content': string;
		'justify-self': string;
		'align-self': string;
		'place-self': string;
		'justify-items': string;
		'align-items': string;
		'place-items': string;
		'row-gap': string;
		'column-gap': string;
		'gap': string;
		/** @deprecated */
		'grid-row-gap': string;
		/** @deprecated */
		'grid-column-gap': string;
		/** @deprecated */
		'grid-gap': string;
	}
}

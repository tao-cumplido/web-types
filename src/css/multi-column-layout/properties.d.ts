/** @spec https://drafts.csswg.org/css-multicol-1/ */
export interface CSSMultiColumnProperties extends CSSMultiColumnProperties.Animatable {}

export namespace CSSMultiColumnProperties {
	export interface Animatable {
		'column-width': string;
		'column-count': string;
		'columns': string;
		'column-rule-color': string;
		'column-rule-style': string;
		'column-rule-width': string;
		'column-rule': string;
		'column-span': string;
		'column-fill': string;
	}
}

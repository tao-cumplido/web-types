/** @spec https://drafts.csswg.org/css-grid-2/ */
export interface CSSGridProperties extends CSSGridProperties.Animatable {}

export namespace CSSGridProperties {
	export interface Animatable {
		'grid-template-columns': string;
		'grid-template-rows': string;
		'grid-template-areas': string;
		'grid-template': string;
		'grid-auto-columns': string;
		'grid-auto-rows': string;
		'grid-auto-flow': string;
		'grid': string;
		'grid-row-start': string;
		'grid-column-start': string;
		'grid-row-end': string;
		'grid-column-end': string;
		'grid-row': string;
		'grid-column': string;
		'grid-area': string;
	}
}

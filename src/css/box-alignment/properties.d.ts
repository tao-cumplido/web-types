/** @spec https://drafts.csswg.org/css-align-3/ */
export interface CSSBoxAlignmentProperties extends CSSBoxAlignmentProperties.Animatable {}

export namespace CSSBoxAlignmentProperties {
	export interface Animatable {
		alignContent: string;
		justifyContent: string;
		placeContent: string;
		justifySelf: string;
		alignSelf: string;
		placeSelf: string;
		justifyItems: string;
		alignItems: string;
		placeItems: string;
		rowGap: string;
		columnGap: string;
		gap: string;
		/** @deprecated */
		gridRowGap: string;
		/** @deprecated */
		gridColumnGap: string;
		/** @deprecated */
		gridGap: string;
	}
}

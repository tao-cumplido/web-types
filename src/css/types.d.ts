/** @spec https://drafts.csswg.org/css-values-3/#typedef-dimension */
export type Dimension<Unit extends string> = `${number}${Unit}`;

/** @spec https://drafts.csswg.org/css-values-3/#percentages */
export type Percentage = Dimension<'%'>;

/** @spec https://drafts.csswg.org/css-values-3/#lengths */
export type Length =
	| '0'
	| Dimension<
		'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px'
	>;

/** @spec https://drafts.csswg.org/css-values-3/#angles */
export type Angle = Dimension<'deg' | 'grad' | 'rad' | 'turn'>;

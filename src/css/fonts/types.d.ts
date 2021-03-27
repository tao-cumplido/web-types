import type { Angle, Percentage } from '../types';

/** @spec https://drafts.csswg.org/css-fonts-4/#font-weight-absolute-values */
export type FontWeightAbsolute = 'normal' | 'bold' | `${number}`;

/** @spec https://drafts.csswg.org/css-fonts-4/#font-stretch-prop */
export type FontStretch =
	| 'normal'
	| Percentage
	| 'condensed'
	| 'expanded'
	| `${'ultra' | 'extra' | 'semi'}-${'condensed' | 'expanded'}`;

/** @spec https://drafts.csswg.org/css-fonts-4/#font-prop-desc */
export type FontStyleDescriptor = 'auto' | 'normal' | 'italic' | 'oblique' | `oblique ${Angle | `${Angle} ${Angle}`}`;

/** @spec https://drafts.csswg.org/css-fonts-4/#font-prop-desc */
export type FontWeightDescriptor = 'auto' | FontWeightAbsolute | `${FontWeightAbsolute} ${FontWeightAbsolute}`;

/** @spec https://drafts.csswg.org/css-fonts-4/#font-prop-desc */
export type FontStretchDescriptor = 'auto' | FontStretch | `${FontStretch} ${FontStretch}`;

/** @spec https://drafts.csswg.org/css-fonts-4/#font-display-desc */
export type FontDisplayDescriptor = 'auto' | 'block' | 'swap' | 'fallback' | 'optional';

/** @spec https://drafts.csswg.org/css-fonts-4/#font-display-desc */
export type FontMetricsOverrideDescriptor = 'normal' | Percentage;

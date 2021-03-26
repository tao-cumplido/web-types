import type { MediaList } from '../object-model';
import type { CSSConditionRule } from './css-condition-rule';

/** @spec https://drafts.csswg.org/css-conditional-3/#the-cssmediarule-interface */
export interface CSSMediaRule extends CSSMediaRule.Interface {}

/** @exposed Window */
export namespace CSSMediaRule {
	export interface Prototype extends CSSConditionRule.Prototype {
		/** @putForwards mediaText */
		media: MediaList;
	}

	export type Interface = Prototype & CSSConditionRule.Interface;

	export interface Static extends CSSConditionRule.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

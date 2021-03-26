import type { ValueOf } from '../../@types';
import type { CSSStyleSheet } from './css-style-sheet';

/**
 * @spec https://drafts.csswg.org/cssom/#the-cssrule-interface
 * @spec https://drafts.csswg.org/css-animations-1/#interface-cssrule
 * @spec https://drafts.csswg.org/css-conditional-3/#extensions-to-cssrule-interface
 * @spec https://drafts.csswg.org/css-counter-styles-3/#extensions-to-cssrule-interface
 * @spec https://drafts.csswg.org/css-device-adapt-1/#css-rule-interface
 */
export interface CSSRule extends CSSRule.Interface {}

/** @exposed Window */
export namespace CSSRule {
	export interface Types {
		readonly STYLE_RULE: 1;
		readonly CHARSET_RULE: 2;
		readonly IMPORT_RULE: 3;
		readonly MEDIA_RULE: 4;
		readonly FONT_FACE_RULE: 5;
		readonly PAGE_RULE: 6;
		readonly KEYFRAMES_RULE: 7;
		readonly KEYFRAME_RULE: 8;
		readonly MARGIN_RULE: 9;
		readonly NAMESPACE_RULE: 10;
		readonly COUNTER_STYLE_RULE: 11;
		readonly SUPPORTS_RULE: 12;
		readonly VIEWPORT_RULE: 15;
	}

	export interface Prototype extends Types {
		readonly parentRule: CSSRule | null;
		readonly parentStyleSheet: CSSStyleSheet | null;
		readonly type: ValueOf<Types>;
		cssText: string;
	}

	export type Interface = Prototype;

	export interface Static extends Types {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

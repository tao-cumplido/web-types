import type { Animation } from '../web-animations';

/** @spec https://drafts.csswg.org/css-animations-2/#the-CSSAnimation-interface */
export interface CSSAnimation extends CSSAnimation.Interface {}

/** @exposed Window */
export namespace CSSAnimation {
	export interface Prototype extends Animation.Prototype {
		readonly animationName: string;
	}

	export type Interface = Prototype & Animation.Interface;

	export interface Static extends Animation.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

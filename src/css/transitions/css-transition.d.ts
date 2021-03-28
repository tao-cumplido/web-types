import type { Animation } from '../web-animations';

/** @spec https://drafts.csswg.org/css-transitions-2/#the-CSSTransition-interface */
export interface CSSTransition extends CSSTransition.Interface {}

/** @exposed Window */
export namespace CSSTransition {
	export interface Prototype extends Animation.Prototype {
		readonly transitionProperty: string;
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

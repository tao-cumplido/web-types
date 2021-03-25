import type { ComputedEffectTiming, EffectTiming, OptionalEffectTiming } from './types';

/** @spec https://drafts.csswg.org/web-animations-1/#the-animationeffect-interface */
export interface AnimationEffect extends AnimationEffect.Interface {}

/** @exposed Window */
export namespace AnimationEffect {
	export interface Prototype {
		getTiming(): EffectTiming;
		getComputedTiming(): ComputedEffectTiming;
		updateTiming(timing?: OptionalEffectTiming): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

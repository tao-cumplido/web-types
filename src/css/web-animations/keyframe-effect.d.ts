import type { Element } from '../../dom';
import type { AnimationEffect } from './animation-effect';
import type { CompositeOperation, ComputedKeyframe, KeyframeArgument, KeyframeEffectOptions } from './types';

/** @spec https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
export interface KeyframeEffect extends KeyframeEffect.Interface {}

/** @exposed Window */
export namespace KeyframeEffect {
	export interface Prototype extends AnimationEffect.Prototype {
		target: Element | null;
		pseudoElement: string | null;
		composite: CompositeOperation;
		getKeyframes(): ComputedKeyframe[];
		setKeyframes(keyframes: KeyframeArgument | null): void;
	}

	export type Interface = Prototype & AnimationEffect.Interface;

	export interface Static extends AnimationEffect.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(
			target: Element | null,
			keyframes: KeyframeArgument | null,
			options?: number | KeyframeEffectOptions,
		): KeyframeEffect;
		new(source: KeyframeEffect): KeyframeEffect;
	}
}

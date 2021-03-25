import type { EasingFunction } from '../easing';
import type { CSSAnimatableProperties } from '../properties';
import type { AnimationTimeline } from './animation-timeline';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-animationplaystate-enumeration
 */
export type AnimationPlayState = 'idle' | 'running' | 'paused' | 'finished';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-animationreplacestate-enumeration
 */
export type AnimationReplaceState = 'active' | 'removed' | 'persisted';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-timelinephase-enumeration
 */
export type TimelinePhase = 'inactive' | 'before' | 'active' | 'after';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-effecttiming-dictionaries
 */
export interface EffectTiming {
	delay?: number;
	endDelay?: number;
	fill?: FillMode;
	iterationStart?: number;
	iterations?: number;
	duration?: string | number;
	direction?: PlaybackDirection;
	easing?: EasingFunction;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-effecttiming-dictionaries
 */
interface OptionalEffectTiming extends EffectTiming {}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-fillmode-enumeration
 */
export type FillMode = 'none' | 'forwards' | 'backwards' | 'both' | 'auto';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-playbackdirection-enumeration
 */
export type PlaybackDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-computedeffecttiming-dictionary
 */
export interface ComputedEffectTiming extends EffectTiming {
	endTime?: number;
	activeDuration?: number;
	localTime?: number | null;
	progress?: number | null;
	currentIteration?: number | null;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-getkeyframes
 */
export interface ComputedKeyframe extends Required<BaseKeyframe>, Partial<CSSAnimatableProperties> {
	computedOffset: number;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument
 */
export interface Keyframe extends BaseKeyframe, Partial<CSSAnimatableProperties> {}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument
 */
export type PropertyIndexedKeyframes = BasePropertyIndexedKeyframe<Keyframe>;

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument
 */
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dictdef-basekeyframe
 */
export interface BaseKeyframe {
	offset?: number | null;
	easing?: EasingFunction;
	composite?: CompositeOperationOrAuto;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dictdef-basepropertyindexedkeyframe
 */
export type BasePropertyIndexedKeyframe<Base extends BaseKeyframe = BaseKeyframe> = {
	[P in keyof Base]?: Base[P] | Array<Base[P]>;
};

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-keyframeeffectoptions-dictionary
 */
export interface KeyframeEffectOptions extends EffectTiming {
	composite?: CompositeOperation;
	pseudoElement?: string | null;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-compositeoperation-enumeration
 */
export type CompositeOperation = 'replace' | 'add' | 'accumulate';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#the-compositeoperation-enumeration
 */
export type CompositeOperationOrAuto = CompositeOperation | 'auto';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dictdef-keyframeanimationoptions
 */
export interface KeyframeAnimationOptions extends KeyframeEffectOptions {
	id?: string;
	timeline?: AnimationTimeline | null;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#dictdef-getanimationsoptions
 */
export interface GetAnimationOptions {
	subtree?: boolean;
}

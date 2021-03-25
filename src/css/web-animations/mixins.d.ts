import type { Animation } from './animation';
import type { GetAnimationOptions, KeyframeAnimationOptions, KeyframeArgument } from './types';

/**
 * @idlType
 * @spec https://drafts.csswg.org/web-animations-1/#animatable
 */
export interface Animatable {
	animate(keyframes: KeyframeArgument | null, options?: number | KeyframeAnimationOptions): Animation;
	getAnimations(options?: GetAnimationOptions): Animation[];
}

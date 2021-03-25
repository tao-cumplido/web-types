import type { CSSAnimationProperties } from './animations';
import type { CSSBoxAlignmentProperties } from './box-alignment';

export interface CSSAnimatableProperties extends CSSBoxAlignmentProperties.Animatable {}

export interface CSSProperties extends CSSBoxAlignmentProperties, CSSAnimationProperties {}

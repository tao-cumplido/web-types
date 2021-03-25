import type { CSSAnimationProperties } from './animations';
import type { CSSBoxAlignmentProperties } from './box-alignment';

type SplitDash<T> = T extends `${infer A}-${infer B}` ? A extends '' ? [...SplitDash<B>] : [A, ...SplitDash<B>]
	: [T];

type CamelJoin<T extends unknown[]> = T extends [] ? ''
	: T extends [string, ...infer R] ? `${T[0]}${Capitalize<CamelJoin<R>>}`
	: never;

type CamelCase<T extends Record<keyof T, string>> =
	& T
	& {
		[P in keyof T as CamelJoin<SplitDash<P>>]: T[P];
	};

export interface CSSAnimatableProperties extends CamelCase<CSSBoxAlignmentProperties.Animatable> {}

export interface CSSProperties extends CamelCase<CSSBoxAlignmentProperties & CSSAnimationProperties> {}

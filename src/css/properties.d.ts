import type { CSSAnimationProperties } from './animations';
import type { CSSBackgroundProperties } from './backgrounds';
import type { CSSBoxProperties } from './box';
import type { CSSBoxAlignmentProperties } from './box-alignment';
import type { CSSCompatibilityProperties } from './compatibility/properties';
import type { CSSFragmentationProperties } from './fragmentation';

type SplitDash<T> = T extends `${infer A}-${infer B}` ? A extends '' ? [...SplitDash<B>] : [A, ...SplitDash<B>]
	: [T];

type CamelJoin<T extends unknown[]> = T extends [] ? ''
	: T extends [string, ...infer R] ? `${T[0]}${Capitalize<CamelJoin<R>>}`
	: never;

type PascalJoin<T extends unknown[]> = T extends [] ? ''
	: T extends [string, ...infer R] ? `${Capitalize<T[0]>}${Capitalize<CamelJoin<R>>}`
	: never;

type CamelCase<T extends Record<keyof T, string>> =
	& T
	& {
		[P in keyof T as CamelJoin<SplitDash<P>>]: T[P];
	};

type PascalCase<T extends Record<keyof T, string>> =
	& T
	& {
		[P in keyof T as PascalJoin<SplitDash<P>>]: T[P];
	};

export interface CSSAnimatableProperties extends
	PascalCase<CSSCompatibilityProperties.Animatable>,
	CamelCase<
		& CSSCompatibilityProperties.Animatable
		& CSSBoxAlignmentProperties.Animatable
		& CSSBackgroundProperties.Animatable
		& CSSBoxProperties.Animatable
		& CSSFragmentationProperties.Animatable
	>
{}

export interface CSSProperties extends
	PascalCase<CSSCompatibilityProperties>,
	CamelCase<
		& CSSCompatibilityProperties
		& CSSBoxAlignmentProperties
		& CSSAnimationProperties
		& CSSBackgroundProperties
		& CSSBoxProperties
		& CSSFragmentationProperties
	>
{}

import type { SVGCSSProperties } from '../svg';
import type { CSSAnimationProperties } from './animations';
import type { CSSBackgroundProperties } from './backgrounds';
import type { CSSBoxProperties } from './box';
import type { CSSBoxAlignmentProperties } from './box-alignment';
import type { CSSCascadingProperties } from './cascading';
import type { CSSColorProperties } from './color';
import type { CSSColorAdjustmentProperties } from './color-adjustment';
import type { CSSCompatibilityProperties } from './compatibility/properties';
import type { CSSContainmentProperties } from './containment';
import type { CSSContentProperties } from './content';
import type { CSSDisplayProperties } from './display';
import type { CSSFlexProperties } from './flex';
import type { CSSFontProperties } from './fonts';
import type { CSSFragmentationProperties } from './fragmentation';
import type { CSSGridProperties } from './grid';
import type { CSSImageProperties } from './images';
import type { CSSInlineProperties } from './inline';
import type { CSSListProperties } from './lists';
import type { CSSLogicalProperties } from './logical';
import type { CSSMultiColumnProperties } from './multi-column-layout';
import type { CSSObjectModelProperties } from './object-model';
import type { CSSOverflowProperties } from './overflow';
import type { CSSOverscrollProperties } from './overscroll';
import type { CSSPagedMediaProperties } from './paged-media';
import type { CSSScrollSnapProperties } from './scroll-snap';
import type { CSSShapeProperties } from './shapes';
import type { CSSTableProperties } from './tables';
import type { CSSTextProperties } from './text';
import type { CSSTextDecorationProperties } from './text-decoration';
import type { CSSTransformProperties } from './transforms';
import type { CSSTransitionProperties } from './transitions';
import type { CSSUserInterfaceProperties } from './user-interface';

type SplitDash<T> = T extends `${infer A}-${infer B}` ? A extends '' ? [...SplitDash<B>] : [A, ...SplitDash<B>]
	: [T];

type CamelJoin<T extends unknown[]> = T extends [] ? ''
	: T extends [string, ...infer R] ? `${T[0]}${Capitalize<CamelJoin<R>>}`
	: never;

type PascalJoin<T extends unknown[]> = T extends [] ? ''
	: T extends [string, ...infer R] ? `${Capitalize<T[0]>}${Capitalize<CamelJoin<R>>}`
	: never;

type CamelCase<T extends Record<keyof T, string>> = {
	[P in keyof T as CamelJoin<SplitDash<P>>]: T[P];
};

type PascalCase<T extends Record<keyof T, string>> = {
	[P in keyof T as PascalJoin<SplitDash<P>>]: T[P];
};

// these are only defined in CSS2
export interface CSS2Properties {
	// https://drafts.csswg.org/css2/#z-index
	'z-index': string;
	// https://drafts.csswg.org/css2/#visibility
	'visibility': string;
}

export namespace CSSAnimatableProperties {
	export interface Dashed
		extends
			CSS2Properties,
			CSSBoxAlignmentProperties.Animatable,
			CSSBackgroundProperties.Animatable,
			CSSBoxProperties.Animatable,
			CSSFragmentationProperties.Animatable,
			CSSCascadingProperties.Animatable,
			CSSColorProperties.Animatable,
			CSSColorAdjustmentProperties.Animatable,
			CSSContentProperties.Animatable,
			CSSFlexProperties.Animatable,
			CSSFontProperties.Animatable,
			CSSGridProperties.Animatable,
			CSSImageProperties.Animatable,
			CSSInlineProperties.Animatable,
			CSSListProperties.Animatable,
			CSSLogicalProperties.Animatable,
			CSSMultiColumnProperties.Animatable,
			CSSOverflowProperties.Animatable,
			CSSOverscrollProperties.Animatable,
			CSSPagedMediaProperties.Animatable,
			CSSScrollSnapProperties.Animatable,
			CSSTableProperties.Animatable,
			CSSTextProperties.Animatable,
			CSSTextDecorationProperties.Animatable,
			CSSTransformProperties.Animatable,
			CSSTransitionProperties.Animatable,
			CSSUserInterfaceProperties.Animatable,
			CSSShapeProperties.Animatable,
			SVGCSSProperties.Animatable
	{}

	export interface CamelCased extends CamelCase<Dashed> {}
}

export namespace CSSProperties {
	export interface Dashed
		extends
			CSS2Properties,
			CSSCompatibilityProperties,
			CSSBoxAlignmentProperties,
			CSSAnimationProperties,
			CSSBackgroundProperties,
			CSSBoxProperties,
			CSSFragmentationProperties,
			CSSCascadingProperties,
			CSSColorProperties,
			CSSColorAdjustmentProperties,
			CSSContainmentProperties,
			CSSContentProperties,
			CSSDisplayProperties,
			CSSFlexProperties,
			CSSFontProperties,
			CSSGridProperties,
			CSSImageProperties,
			CSSInlineProperties,
			CSSListProperties,
			CSSLogicalProperties,
			CSSMultiColumnProperties,
			CSSOverflowProperties,
			CSSOverscrollProperties,
			CSSPagedMediaProperties,
			CSSScrollSnapProperties,
			CSSTableProperties,
			CSSTextProperties,
			CSSTextDecorationProperties,
			CSSTransformProperties,
			CSSTransitionProperties,
			CSSUserInterfaceProperties,
			CSSShapeProperties,
			CSSObjectModelProperties,
			SVGCSSProperties
	{}

	export interface CamelCased extends CamelCase<Dashed> {}

	export interface PascalCased extends PascalCase<CSSCompatibilityProperties> {}
}

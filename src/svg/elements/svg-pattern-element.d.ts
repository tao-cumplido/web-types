import type { ValueOf } from '../../@types';
import type { SVGFitToViewBox, SVGURIReference } from '../mixins';
import type { SVGAnimatedEnumeration } from '../svg-animated-enumeration';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGAnimatedTransformList } from '../svg-animated-transform-list';
import type { SVGUnitTypes } from '../svg-unit-types';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/pservers.html#InterfaceSVGPatternElement */
export interface SVGPatternElement extends SVGPatternElement.Interface {}

/** @exposed Window */
export namespace SVGPatternElement {
	export interface Prototype extends SVGElement.Prototype, SVGFitToViewBox, SVGURIReference {
		readonly patternUnits: SVGAnimatedEnumeration<ValueOf<SVGUnitTypes>>;
		readonly patternContentUnits: SVGAnimatedEnumeration<ValueOf<SVGUnitTypes>>;
		readonly patternTransform: SVGAnimatedTransformList;
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;
	}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

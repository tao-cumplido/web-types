import type { ValueOf } from '../../@types';
import type { SVGURIReference } from '../mixins';
import type { SVGAnimatedEnumeration } from '../svg-animated-enumeration';
import type { SVGAnimatedTransformList } from '../svg-animated-transform-list';
import type { SVGUnitTypes } from '../svg-unit-types';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/pservers.html#InterfaceSVGGradientElement */
export interface SVGGradientElement extends SVGGradientElement.Interface {}

/** @exposed Window */
export namespace SVGGradientElement {
	export interface SpreadMethodTypes {
		readonly SVG_SPREADMETHOD_UNKNOWN: 0;
		readonly SVG_SPREADMETHOD_PAD: 1;
		readonly SVG_SPREADMETHOD_REFLECT: 2;
		readonly SVG_SPREADMETHOD_REPEAT: 3;
	}

	export interface Prototype extends SVGElement.Prototype, SVGURIReference {
		readonly gradientUnits: SVGAnimatedEnumeration<ValueOf<SVGUnitTypes>>;
		readonly gradientTransform: SVGAnimatedTransformList;
		readonly spreadMethod: SVGAnimatedEnumeration<ValueOf<SpreadMethodTypes>>;
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

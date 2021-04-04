import type { ValueOf } from '../../@types';
import type { SVGURIReference } from '../mixins';
import type { SVGAnimatedEnumeration } from '../svg-animated-enumeration';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGTextContentElement } from './svg-text-content-element';

/** @spec https://svgwg.org/svg2-draft/text.html#InterfaceSVGTextPathElement */
export interface SVGTextPathElement extends SVGTextPathElement.Interface {}

/** @exposed Window */
export namespace SVGTextPathElement {
	export interface MethodTypes {
		readonly TEXTPATH_METHODTYPE_UNKNOWN: 0;
		readonly TEXTPATH_METHODTYPE_ALIGN: 1;
		readonly TEXTPATH_METHODTYPE_STRETCH: 2;
	}

	export interface SpacingTypes {
		readonly TEXTPATH_SPACINGTYPE_UNKNOWN: 0;
		readonly TEXTPATH_SPACINGTYPE_AUTO: 1;
		readonly TEXTPATH_SPACINGTYPE_EXACT: 2;
	}

	export interface Prototype extends SVGTextContentElement.Prototype, MethodTypes, SpacingTypes, SVGURIReference {
		readonly startOffset: SVGAnimatedLength;
		readonly method: SVGAnimatedEnumeration<ValueOf<MethodTypes>>;
		readonly spacing: SVGAnimatedEnumeration<ValueOf<SpacingTypes>>;
	}

	export type Interface = Prototype & SVGTextContentElement.Interface;

	export interface Static extends SVGTextContentElement.Static, MethodTypes, SpacingTypes {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

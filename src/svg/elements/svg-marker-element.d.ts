import type { ValueOf } from '../../@types';
import type { Angle } from '../../css';
import type { SVGFitToViewBox } from '../mixins';
import type { SVGAngle } from '../svg-angle';
import type { SVGAnimatedAngle } from '../svg-animated-angle';
import type { SVGAnimatedEnumeration } from '../svg-animated-enumeration';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGElement } from './svg-element';

/** @spec https://svgwg.org/svg2-draft/painting.html#InterfaceSVGMarkerElement */
export interface SVGMarkerElement extends SVGMarkerElement.Interface {}

/** @exposed Window */
export namespace SVGMarkerElement {
	export interface UnitTypes {
		readonly SVG_MARKERUNITS_UNKNOWN: 0;
		readonly SVG_MARKERUNITS_USERSPACEONUSE: 1;
		readonly SVG_MARKERUNITS_STROKEWIDTH: 2;
	}

	export interface OrientationTypes {
		readonly SVG_MARKER_ORIENT_UNKNOWN: 0;
		readonly SVG_MARKER_ORIENT_AUTO: 1;
		readonly SVG_MARKER_ORIENT_ANGLE: 2;
	}

	export interface Prototype extends SVGElement.Prototype, UnitTypes, OrientationTypes, SVGFitToViewBox {
		readonly refX: SVGAnimatedLength;
		readonly refY: SVGAnimatedLength;
		readonly markerUnits: SVGAnimatedEnumeration<ValueOf<UnitTypes>>;
		readonly markerWidth: SVGAnimatedLength;
		readonly markerHeight: SVGAnimatedLength;
		readonly orientType: SVGAnimatedEnumeration<ValueOf<OrientationTypes>>;
		readonly orientAngle: SVGAnimatedAngle;
		orient: 'auto' | 'auto-start-reverse' | Angle | `${number}`;

		setOrientToAuto(): void;
		setOrientToAngle(angle: SVGAngle): void;
	}

	export type Interface = Prototype & SVGElement.Interface;

	export interface Static extends SVGElement.Static, UnitTypes, OrientationTypes {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

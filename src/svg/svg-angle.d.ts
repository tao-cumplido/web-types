import type { ValueOf } from '../@types';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGAngle */
export interface SVGAngle extends SVGAngle.Interface {}

/** @exposed Window */
export namespace SVGAngle {
	export interface UnitTypes {
		readonly SVG_ANGLETYPE_UNKNOWN: 0;
		readonly SVG_ANGLETYPE_UNSPECIFIED: 1;
		readonly SVG_ANGLETYPE_DEG: 2;
		readonly SVG_ANGLETYPE_RAD: 3;
		readonly SVG_ANGLETYPE_GRAD: 4;
	}

	export interface Prototype extends UnitTypes {
		readonly unitType: ValueOf<UnitTypes>;

		value: number;
		valueInSpecifiedUnits: number;
		valueAsString: string;

		newValueSpecifiedUnits(unitType: ValueOf<UnitTypes>, valueInSpecifiedUnits: number): void;
		convertToSpecifiedUnits(unitType: ValueOf<UnitTypes>): void;
	}

	export type Interface = Prototype;

	export interface Static extends UnitTypes {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

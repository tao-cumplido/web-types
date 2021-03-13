import type { ValueOf } from '../@types';

/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGLength */
export interface SVGLength extends SVGLength.Interface {}

/** @exposed Window */
export namespace SVGLength {
	export interface UnitTypes {
		readonly SVG_LENGTHTYPE_UNKNOWN: 0;
		readonly SVG_LENGTHTYPE_NUMBER: 1;
		readonly SVG_LENGTHTYPE_PERCENTAGE: 2;
		readonly SVG_LENGTHTYPE_EMS: 3;
		readonly SVG_LENGTHTYPE_EXS: 4;
		readonly SVG_LENGTHTYPE_PX: 5;
		readonly SVG_LENGTHTYPE_CM: 6;
		readonly SVG_LENGTHTYPE_MM: 7;
		readonly SVG_LENGTHTYPE_IN: 8;
		readonly SVG_LENGTHTYPE_PT: 9;
		readonly SVG_LENGTHTYPE_PC: 10;
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

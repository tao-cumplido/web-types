/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGUnitTypes */
export interface SVGUnitTypes extends SVGUnitTypes.Interface {}

/** @exposed Window */
export namespace SVGUnitTypes {
	export interface UnitTypes {
		readonly SVG_UNIT_TYPE_UNKNOWN: 0;
		readonly SVG_UNIT_TYPE_USERSPACEONUSE: 1;
		readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: 2;
	}

	export interface Prototype extends UnitTypes {}

	export type Interface = Prototype;

	export interface Static extends UnitTypes {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

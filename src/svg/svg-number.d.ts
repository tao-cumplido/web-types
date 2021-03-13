/** @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGNumber */
export interface SVGNumber extends SVGNumber.Interface {}

/** @exposed Window */
export namespace SVGNumber {
	export interface Prototype {
		value: number;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

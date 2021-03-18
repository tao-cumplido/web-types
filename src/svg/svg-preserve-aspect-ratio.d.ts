import type { ValueOf } from '../@types';

/** @spec https://svgwg.org/svg2-draft/coords.html#InterfaceSVGPreserveAspectRatio */
export interface SVGPreserveAspectRatio extends SVGPreserveAspectRatio.Interface {}

/** @exposed Window */
export namespace SVGPreserveAspectRatio {
	export interface Alignment {
		readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: 0;
		readonly SVG_PRESERVEASPECTRATIO_NONE: 1;
		readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: 2;
		readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: 3;
		readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: 4;
		readonly SVG_PRESERVEASPECTRATIO_XMINYMID: 5;
		readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: 6;
		readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: 7;
		readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: 8;
		readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: 9;
		readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: 10;
	}

	export interface MeetOrSlice {
		readonly SVG_MEETORSLICE_UNKNOWN: 0;
		readonly SVG_MEETORSLICE_MEET: 1;
		readonly SVG_MEETORSLICE_SLICE: 2;
	}

	export interface Prototype {
		align: ValueOf<Alignment>;
		meetOrSlice: ValueOf<MeetOrSlice>;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

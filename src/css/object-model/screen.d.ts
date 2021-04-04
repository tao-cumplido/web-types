/** @spec https://drafts.csswg.org/cssom-view-1/#the-screen-interface */
export interface Screen extends Screen.Interface {}

/** @exposed Window */
export namespace Screen {
	export interface Prototype {
		readonly availWidth: number;
		readonly availHeight: number;
		readonly width: number;
		readonly height: number;
		readonly colorDepth: number;
		readonly pixelDepth: number;
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

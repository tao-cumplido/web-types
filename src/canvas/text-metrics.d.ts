/** @spec https://html.spec.whatwg.org/multipage/canvas.html#textmetrics */
export interface TextMetrics extends TextMetrics.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace TextMetrics {
	export interface Prototype {
		readonly width: number;
		readonly actualBoundingBoxLeft: number;
		readonly actualBoundingBoxRight: number;

		readonly fontBoundingBoxAscent: number;
		readonly fontBoundingBoxDescent: number;
		readonly actualBoundingBoxAscent: number;
		readonly actualBoundingBoxDescent: number;
		readonly emHeightAscent: number;
		readonly emHeightDescent: number;
		readonly hangingBaseline: number;
		readonly alphabeticBaseline: number;
		readonly ideographicBaseline: number;
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

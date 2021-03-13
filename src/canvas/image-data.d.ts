/** @spec https://html.spec.whatwg.org/multipage/canvas.html#imagedata */
export interface ImageData extends ImageData.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace ImageData {
	export interface Prototype {
		readonly width: number;
		readonly height: number;
		readonly data: Uint8ClampedArray;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (sw: number, sh: number): ImageData;
		new (data: Uint8ClampedArray, sw: number, sh: number): ImageData;
	}
}

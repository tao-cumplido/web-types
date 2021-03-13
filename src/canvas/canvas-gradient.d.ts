/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasgradient */
export interface CanvasGradient extends CanvasGradient.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CanvasGradient {
	export interface Prototype {
		addColorStop(offset: number, color: string): void;
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

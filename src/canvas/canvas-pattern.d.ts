import type { DOMMatrix2DInit } from '../geometry';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaspattern */
export interface CanvasPattern extends CanvasPattern.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CanvasPattern {
	export interface Prototype {
		setTransform(transform?: DOMMatrix2DInit): void;
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

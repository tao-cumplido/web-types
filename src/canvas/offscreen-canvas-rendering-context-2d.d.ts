import type {
	CanvasCompositing,
	CanvasDrawImage,
	CanvasDrawPath,
	CanvasFillStrokeStyles,
	CanvasFilters,
	CanvasImageData,
	CanvasImageSmoothing,
	CanvasPath,
	CanvasPathDrawingStyles,
	CanvasRect,
	CanvasShadowStyles,
	CanvasState,
	CanvasText,
	CanvasTextDrawingStyles,
	CanvasTransform,
} from './mixins';
import type { OffscreenCanvas } from './offscreen-canvas';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#the-offscreen-2d-rendering-context */
export interface OffscreenCanvasRenderingContext2D extends OffscreenCanvasRenderingContext2D.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace OffscreenCanvasRenderingContext2D {
	export interface Prototype
		extends CanvasState,
			CanvasTransform,
			CanvasCompositing,
			CanvasImageSmoothing,
			CanvasFillStrokeStyles,
			CanvasShadowStyles,
			CanvasFilters,
			CanvasRect,
			CanvasDrawPath,
			CanvasText,
			CanvasDrawImage,
			CanvasImageData,
			CanvasPathDrawingStyles,
			CanvasTextDrawingStyles,
			CanvasPath {
		readonly canvas: OffscreenCanvas;
		commit(): void;
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

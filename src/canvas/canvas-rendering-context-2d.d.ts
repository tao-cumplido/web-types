import type { HTMLCanvasElement } from '../html';
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
	CanvasUserInterface,
} from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasrenderingcontext2dsettings */
export interface CanvasRenderingContext2DSettings {
	alpha?: boolean;
	desynchronized?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#2dcontext */
export interface CanvasRenderingContext2D extends CanvasRenderingContext2D.Interface {}

/** @exposed Window */
export namespace CanvasRenderingContext2D {
	export interface Prototype
		extends
			CanvasState,
			CanvasTransform,
			CanvasCompositing,
			CanvasImageSmoothing,
			CanvasFillStrokeStyles,
			CanvasShadowStyles,
			CanvasFilters,
			CanvasRect,
			CanvasDrawPath,
			CanvasUserInterface,
			CanvasText,
			CanvasDrawImage,
			CanvasImageData,
			CanvasPathDrawingStyles,
			CanvasTextDrawingStyles,
			CanvasPath
	{
		readonly canvas: HTMLCanvasElement;
		getContextAttributes(): CanvasRenderingContext2DSettings;
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

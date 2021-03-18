import type { EventTarget } from '../dom';
import type { Blob } from '../file';
import type { WebGL2RenderingContext, WebGLRenderingContext } from '../web-gl';
import type { ImageBitmap } from './image-bitmap';
import type { ImageBitmapRenderingContext } from './image-bitmap-rendering-context';
import type { CanvasRenderingContextHost } from './mixins';
import type { OffscreenCanvasRenderingContext2D } from './offscreen-canvas-rendering-context-2d';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#offscreenrenderingcontext */
export type OffscreenRenderingContext =
	| OffscreenCanvasRenderingContext2D
	| ImageBitmapRenderingContext
	| WebGLRenderingContext
	| WebGL2RenderingContext;

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#imageencodeoptions */
export interface ImageEncodeOptions {
	type?: string;
	quality?: number;
}

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#offscreenrenderingcontextid */
export type OffscreenRenderingContextId = '2d' | 'bitmaprenderer' | 'webgl' | 'webgl2';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface */
export interface OffscreenCanvas extends OffscreenCanvas.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace OffscreenCanvas {
	export interface Prototype
		extends EventTarget.Prototype, CanvasRenderingContextHost<OffscreenCanvasRenderingContext2D>
	{
		transferToImageBitmap(): ImageBitmap;
		convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(width: number, height: number): OffscreenCanvas;
	}
}

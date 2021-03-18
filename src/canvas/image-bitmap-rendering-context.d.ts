import type { HTMLCanvasElement } from '../html';
import type { ImageBitmap } from './image-bitmap';
import type { OffscreenCanvas } from './offscreen-canvas';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#imagebitmaprenderingcontextsettings */
export interface ImageBitmapRenderingContextSettings {
	alpha?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#the-imagebitmaprenderingcontext-interface */
export interface ImageBitmapRenderingContext extends ImageBitmapRenderingContext.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace ImageBitmapRenderingContext {
	export interface Prototype {
		transferFromImageBitmap(bitmap: ImageBitmap | null): void;
	}

	export namespace Prototype {
		export interface Window {
			readonly canvas: HTMLCanvasElement | OffscreenCanvas;
		}

		export interface Worker {
			readonly canvas: OffscreenCanvas;
		}
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

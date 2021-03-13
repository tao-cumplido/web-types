import type {
	CanvasRenderingContext2D,
	CanvasRenderingContextHost,
	ImageBitmapRenderingContext,
	OffscreenCanvas,
} from '../canvas';
import type { Blob } from '../file';
import type { WebGL2RenderingContext, WebGLRenderingContext } from '../web-gl';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#renderingcontext */
export type RenderingContext =
	| CanvasRenderingContext2D
	| ImageBitmapRenderingContext
	| WebGLRenderingContext
	| WebGL2RenderingContext;

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#blobcallback */
export type BlobCallback = (blob: Blob | null) => void;

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element */
export interface HTMLCanvasElement extends HTMLCanvasElement.Interface {}

/** @exposed Window */
export namespace HTMLCanvasElement {
	export interface Prototype extends HTMLElement.Prototype, CanvasRenderingContextHost<CanvasRenderingContext2D> {
		toDataURL(type?: string, quality?: number): string;
		toBlob(callback: BlobCallback, type?: string, quality?: number): void;
		transferControlToOffscreen(): OffscreenCanvas;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLCanvasElement;
	}
}

import type { Blob } from '../file';
import type { ImageData } from './image-data';
import type { CanvasImageSource } from './types';

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource */
export type ImageBitmapSource = CanvasImageSource | Blob | ImageData;

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imageorientation */
export type ImageOrientation = 'none' | 'flipY';

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#premultiplyalpha */
export type PremultiplyAlpha = 'none' | 'premultiply' | 'default';

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#colorspaceconversion */
export type ColorSpaceConversion = 'none' | 'default';

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#resizequality */
export type ResizeQuality = 'pixelated' | 'low' | 'medium' | 'high';

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapoptions */
export interface ImageBitmapOptions {
	imageOrientation?: ImageOrientation;
	premultiplyAlpha?: PremultiplyAlpha;
	colorSpaceConversion?: ColorSpaceConversion;
	resizeWidth?: number;
	resizeHeight?: number;
	resizeQuality?: ResizeQuality;
}

/** @spec https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#images-2 */
export interface ImageBitmap extends ImageBitmap.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace ImageBitmap {
	export interface Prototype {
		readonly width: number;
		readonly height: number;
		close(): void;
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

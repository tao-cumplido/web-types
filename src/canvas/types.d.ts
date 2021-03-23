import type { HTMLCanvasElement, HTMLImageElement, HTMLVideoElement } from '../html';
import type { SVGImageElement } from '../svg';
import type { ImageBitmap } from './image-bitmap';
import type { OffscreenCanvas } from './offscreen-canvas';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#imagesmoothingquality
 */
export type ImageSmoothingQuality = 'low' | 'medium' | 'high';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasfillrule
 */
export type CanvasFillRule = 'nonzero' | 'evenodd';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#htmlorsvgimageelement
 */
export type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasimagesource
 */
export type CanvasImageSource =
	| HTMLOrSVGImageElement
	| HTMLVideoElement
	| HTMLCanvasElement
	| ImageBitmap
	| OffscreenCanvas;

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaslinecap
 */
export type CanvasLineCap = 'butt' | 'round' | 'square';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaslinejoin
 */
export type CanvasLineJoin = 'round' | 'bevel' | 'miter';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastextalign
 */
export type CanvasTextAlign = 'start' | 'end' | 'left' | 'right' | 'center';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastextbaseline
 */
export type CanvasTextBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasdirection
 */
export type CanvasDirection = 'ltr' | 'rtl' | 'inherit';

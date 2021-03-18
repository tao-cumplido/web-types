import type { HTMLCanvasElement, HTMLImageElement, HTMLVideoElement } from '../html';
import type { SVGImageElement } from '../svg';
import type { ImageBitmap } from './image-bitmap';
import type { OffscreenCanvas } from './offscreen-canvas';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#imagesmoothingquality */
export type ImageSmoothingQuality = 'low' | 'medium' | 'high';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasfillrule */
export type CanvasFillRule = 'nonzero' | 'evenodd';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#htmlorsvgimageelement */
export type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasimagesource */
export type CanvasImageSource =
	| HTMLOrSVGImageElement
	| HTMLVideoElement
	| HTMLCanvasElement
	| ImageBitmap
	| OffscreenCanvas;

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaslinecap */
export type CanvasLineCap = 'butt' | 'round' | 'square';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaslinejoin */
export type CanvasLineJoin = 'round' | 'bevel' | 'miter';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastextalign */
export type CanvasTextAlign = 'start' | 'end' | 'left' | 'right' | 'center';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastextbaseline */
export type CanvasTextBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasdirection */
export type CanvasDirection = 'ltr' | 'rtl' | 'inherit';

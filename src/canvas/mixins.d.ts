import type { Element } from '../dom';
import type { DOMMatrix, DOMMatrix2DInit } from '../geometry';
import type { WebGL2RenderingContext, WebGLContextAttributes, WebGLRenderingContext } from '../web-gl';
import type { CanvasGradient } from './canvas-gradient';
import type { CanvasPattern } from './canvas-pattern';
import type { CanvasRenderingContext2D, CanvasRenderingContext2DSettings } from './canvas-rendering-context-2d';
import type {
	ImageBitmapRenderingContext,
	ImageBitmapRenderingContextSettings,
} from './image-bitmap-rendering-context';
import type { ImageData } from './image-data';
import type { OffscreenCanvasRenderingContext2D } from './offscreen-canvas-rendering-context-2d';
import type { Path2D } from './path-2d';
import type { TextMetrics } from './text-metrics';
import type {
	CanvasDirection,
	CanvasFillRule,
	CanvasImageSource,
	CanvasLineCap,
	CanvasLineJoin,
	CanvasTextAlign,
	CanvasTextBaseline,
	ImageSmoothingQuality,
} from './types';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasstate
 */
export interface CanvasState {
	save(): void;
	restore(): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastransform
 */
export interface CanvasTransform {
	scale(x: number, y: number): void;
	rotate(angle: number): void;
	translate(x: number, y: number): void;
	transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

	getTransform(): DOMMatrix;
	setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
	setTransform(transform?: DOMMatrix2DInit): void;
	resetTransform(): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvascompositing
 */
export interface CanvasCompositing {
	globalAlpha: number;
	globalCompositeOperation: 'source-over' | 'copy';
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasimagesmoothing
 */
export interface CanvasImageSmoothing {
	imageSmoothingEnabled: boolean;
	imageSmoothingQuality: ImageSmoothingQuality;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasfillstrokestyles
 */
export interface CanvasFillStrokeStyles {
	strokeStyle: string | CanvasGradient | CanvasPattern;
	fillStyle: string | CanvasGradient | CanvasPattern;
	createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
	createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
	createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasshadowstyles
 */
export interface CanvasShadowStyles {
	shadowOffsetX: number;
	shadowOffsetY: number;
	shadowBlur: number;
	shadowColor: string;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasfilters
 */
export interface CanvasFilters {
	filter: string;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasrect
 */
export interface CanvasRect {
	clearRect(x: number, y: number, w: number, h: number): void;
	fillRect(x: number, y: number, w: number, h: number): void;
	strokeRect(x: number, y: number, w: number, h: number): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasdrawpath
 */
export interface CanvasDrawPath {
	beginPath(): void;
	fill(fillRule?: CanvasFillRule): void;
	fill(path: Path2D, fillRule?: CanvasFillRule): void;
	stroke(path?: Path2D): void;
	clip(fillRule?: CanvasFillRule): void;
	clip(path: Path2D, fillRule?: CanvasFillRule): void;
	isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): void;
	isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): void;
	isPointInStroke(x: number, y: number): void;
	isPointInStroke(path: Path2D, x: number, y: number): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasuserinterface
 */
export interface CanvasUserInterface {
	drawFocusIfNeeded(element: Element): void;
	drawFocusIfNeeded(path: Path2D, element: Element): void;
	scrollPathIntoView(path?: Path2D): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastext
 */
export interface CanvasText {
	fillText(text: string, x: number, y: number, maxWidth: number): void;
	strokeText(text: string, x: number, y: number, maxWidth: number): void;
	measureText(text: string): TextMetrics;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasdrawimage
 */
export interface CanvasDrawImage {
	drawImage(image: CanvasImageSource, dx: number, dy: number): void;
	drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
	drawImage(
		image: CanvasImageSource,
		sx: number,
		sy: number,
		sw: number,
		sh: number,
		dx: number,
		dy: number,
		dw: number,
		dh: number,
	): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvasimagedata
 */
export interface CanvasImageData {
	createImageData(sw: number, sh: number): ImageData;
	createImageData(imagedata: ImageData): ImageData;
	getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
	putImageData(imagedata: ImageData, dx: number, dy: number): void;
	putImageData(
		imagedata: ImageData,
		dx: number,
		dy: number,
		dirtyX: number,
		dirtyY: number,
		dirtyWidth: number,
		dirtyHeight: number,
	): void;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaspathdrawingstyles
 */
export interface CanvasPathDrawingStyles {
	lineWidth: number;
	lineCap: CanvasLineCap;
	lineJoin: CanvasLineJoin;
	miterLimit: number;

	lineDashOffset: number;

	setLineDash(segments: number[]): void;
	getLineDash(): number[];
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvastextdrawingstyles
 */
export interface CanvasTextDrawingStyles {
	font: string;
	textAlign: CanvasTextAlign;
	textBaseline: CanvasTextBaseline;
	direction: CanvasDirection;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/canvas.html#canvaspath
 */
export interface CanvasPath {
	closePath(): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
	rect(x: number, y: number, w: number, h: number): void;
	arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise?: boolean): void;
	ellipse(
		x: number,
		y: number,
		radiusX: number,
		radiusY: number,
		rotation: number,
		startAngle: number,
		endAngle: number,
		counterClockwise?: boolean,
	): void;
}

export interface CanvasRenderingContextHost<
	RenderingContext2D extends CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
> {
	width: number;
	height: number;

	getContext(contextId: '2d', options?: CanvasRenderingContext2DSettings): RenderingContext2D | null;
	getContext(
		contextId: 'bitmaprenderer',
		options?: ImageBitmapRenderingContextSettings,
	): ImageBitmapRenderingContext | null;
	getContext(contextId: 'webgl', options?: WebGLContextAttributes): WebGLRenderingContext | null;
	getContext(contextId: 'webgl2', options?: WebGLContextAttributes): WebGL2RenderingContext | null;
}

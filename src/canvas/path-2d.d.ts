import type { DOMMatrix2DInit } from '../geometry';
import type { CanvasPath } from './mixins';

/** @spec https://html.spec.whatwg.org/multipage/canvas.html#path2d */
export interface Path2D extends Path2D.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace Path2D {
	export interface Prototype extends CanvasPath {
		addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (path?: Path2D | string): Path2D;
	}
}

import type { IndexedIterable } from '../iterable';
import type { SVGElement, SVGUseElement } from './elements';
import type { SVGAnimatedPreserveAspectRatio } from './svg-animated-preserve-aspect-ratio';
import type { SVGAnimatedRect } from './svg-animated-rect';
import type { SVGAnimatedString } from './svg-animated-string';
import type { SVGPointList } from './svg-point-list';
import type { SVGStringList } from './svg-string-list';

/** @spec https://svgwg.org/svg2-draft/types.html#ListInterfaces */
export interface SVGList<T> extends IndexedIterable<T> {
	readonly length: number;
	readonly numberOfItems: number;

	clear(): void;
	initialize(newItem: T): T;
	getItem(index: number): T;
	insertItemBefore(newItem: T, index: number): T;
	replaceItem(newItem: T, index: number): T;
	removeItem(index: number): T;
	appendItem(newItem: T): T;
}

export interface SVGAnimatedMutable<Base, Anim = Base> {
	readonly animVal: Anim;
	baseVal: Base;
}

export interface SVGAnimatedReadonly<Base, Anim = Base> extends Readonly<SVGAnimatedMutable<Base, Anim>> {}

/**
 * @idlType
 * @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGTests
 */
export interface SVGTests {
	readonly requiredExtensions: SVGStringList;
	readonly systemLanguage: SVGStringList;
}

/**
 * @idlType
 * @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGFitToViewBox
 */
export interface SVGFitToViewBox {
	readonly viewBox: SVGAnimatedRect;
	readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

/**
 * @idlType
 * @spec https://svgwg.org/svg2-draft/types.html#InterfaceSVGURIReference
 */
export interface SVGURIReference {
	readonly href: SVGAnimatedString;
}

/**
 * @idlType
 * @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGElementInstance
 */
export interface SVGElementInstance {
	readonly correspondingElement: SVGElement | null;
	readonly correspondingUseElement: SVGUseElement | null;
}

/**
 * @idlType
 * @spec https://svgwg.org/svg2-draft/shapes.html#InterfaceSVGAnimatedPoints
 */
export interface SVGAnimatedPoints {
	readonly points: SVGPointList;
	readonly animatedPoints: SVGPointList;
}

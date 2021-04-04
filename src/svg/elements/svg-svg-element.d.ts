import type { NodeList } from '../../collections';
import type { Element } from '../../dom';
import type { DOMMatrix, DOMMatrix2DInit, DOMPoint, DOMPointReadOnly, DOMRect, DOMRectReadOnly } from '../../geometry';
import type { WindowEventHandlers, WindowEventTypes } from '../../html';
import type { SVGFitToViewBox } from '../mixins';
import type { SVGAngle } from '../svg-angle';
import type { SVGAnimatedLength } from '../svg-animated-length';
import type { SVGLength } from '../svg-length';
import type { SVGNumber } from '../svg-number';
import type { SVGTransform } from '../svg-transform';
import type { SVGCircleElement } from './svg-circle-element';
import type { SVGElement } from './svg-element';
import type { SVGEllipseElement } from './svg-ellipse-element';
import type { SVGForeignObjectElement } from './svg-foreign-object-element';
import type { SVGGraphicsElement } from './svg-graphics-element';
import type { SVGImageElement } from './svg-image-element';
import type { SVGLineElement } from './svg-line-element';
import type { SVGPathElement } from './svg-path-element';
import type { SVGPolygonElement } from './svg-polygon-element';
import type { SVGPolylineElement } from './svg-polyline-element';
import type { SVGRectElement } from './svg-rect-element';
import type { SVGTextElement } from './svg-text-element';
import type { SVGTextPathElement } from './svg-text-path-element';
import type { SVGTSpanElement } from './svg-tspan-element';
import type { SVGUseElement } from './svg-use-element';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGSVGElement */
export interface SVGSVGElement extends SVGSVGElement.Interface {}

/** @exposed Window */
export namespace SVGSVGElement {
	// not to be confused with SVGGraphicsElement https://svgwg.org/svg2-draft/struct.html#TermGraphicsElement
	type GraphicsElement =
		| SVGCircleElement
		| SVGEllipseElement
		| SVGForeignObjectElement
		| SVGImageElement
		| SVGLineElement
		| SVGPathElement
		| SVGPolygonElement
		| SVGPolylineElement
		| SVGRectElement
		| SVGTextElement
		| SVGTextPathElement
		| SVGTSpanElement
		| SVGUseElement;

	export interface Prototype
		extends SVGGraphicsElement.Prototype<WindowEventTypes>, SVGFitToViewBox, WindowEventHandlers
	{
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;

		readonly currentTranslate: DOMPointReadOnly;

		currentScale: number;

		getIntersectionList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeList<GraphicsElement>;
		getEnclosureList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeList<GraphicsElement>;
		checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
		checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;

		createSVGNumber(): SVGNumber;
		createSVGLength(): SVGLength;
		createSVGAngle(): SVGAngle;
		createSVGPoint(): DOMPoint;
		createSVGMatrix(): DOMMatrix;
		createSVGRect(): DOMRect;
		createSVGTransform(): SVGTransform;
		createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;

		getElementById(elementId: string): Element | null;

		/** @deprecated */
		deselectAll(): void;
		/** @deprecated */
		suspendRedraw(maxWaitMilliseconds: number): 1;
		/** @deprecated */
		unsuspendRedraw(suspendHandleID: number): void;
		/** @deprecated */
		unsuspendRedrawAll(): void;
		/** @deprecated */
		forceRedraw(): void;
	}

	export type Interface = Prototype & SVGGraphicsElement.Interface;

	export interface Static extends SVGGraphicsElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

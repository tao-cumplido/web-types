import type { NodeList } from '../collections';
import type { Element } from '../dom';
import type { WindowEventHandlers } from '../event';
import type { DOMMatrix, DOMMatrix2DInit, DOMPoint, DOMPointReadOnly, DOMRect, DOMRectReadOnly } from '../geometry';
import type { SVGFitToViewBox } from './mixins';
import type { SVGAngle } from './svg-angle';
import type { SVGAnimatedLength } from './svg-animated-length';
import type { SVGElement } from './svg-element';
import type { SVGGraphicsElement } from './svg-graphics-element';
import type { SVGLength } from './svg-length';
import type { SVGNumber } from './svg-number';
import type { SVGTransform } from './svg-transform';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceSVGSVGElement */
export interface SVGSVGElement extends SVGSVGElement.Interface {}

/** @exposed Window */
export namespace SVGSVGElement {
	export interface Prototype extends SVGGraphicsElement.Prototype, SVGFitToViewBox, WindowEventHandlers {
		readonly x: SVGAnimatedLength;
		readonly y: SVGAnimatedLength;
		readonly width: SVGAnimatedLength;
		readonly height: SVGAnimatedLength;

		readonly currentTranslate: DOMPointReadOnly;

		currentScale: number;

		// TODO: restrict node lists to defined elements https://svgwg.org/svg2-draft/struct.html#TermGraphicsElement
		getIntersectionList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeList<SVGGraphicsElement>;
		getEnclosureList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeList<SVGGraphicsElement>;
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
		new (): never;
	}
}

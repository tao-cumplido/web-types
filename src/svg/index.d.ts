/* eslint-disable @typescript-eslint/consistent-type-imports */

export { SVGElement } from './svg-element';
export { SVGGraphicsElement } from './svg-graphics-element';
export { SVGSVGElement } from './svg-svg-element';

export interface SVGElementMap {
	svg: import('./svg-svg-element').SVGSVGElement;
}

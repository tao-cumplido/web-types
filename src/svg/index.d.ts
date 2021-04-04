import type * as elements from './elements';
export interface SVGElementMap {
	// https://svgwg.org/svg2-draft/struct.html
	svg: elements.SVGSVGElement;
	g: elements.SVGGElement;
	defs: elements.SVGDefsElement;
	symbol: elements.SVGSymbolElement;
	use: elements.SVGUseElement;
	switch: elements.SVGSwitchElement;
	title: elements.SVGTitleElement;
	desc: elements.SVGDescElement;
	metadata: elements.SVGMetadataElement;

	// https://svgwg.org/svg2-draft/styling.html
	style: elements.SVGStyleElement;

	// https://svgwg.org/svg2-draft/paths.html
	path: elements.SVGPathElement;

	// https://svgwg.org/svg2-draft/shapes.html
	rect: elements.SVGRectElement;
	circle: elements.SVGCircleElement;
	ellipse: elements.SVGEllipseElement;
	line: elements.SVGLineElement;
	polyline: elements.SVGPolylineElement;
	polygon: elements.SVGPolygonElement;

	// https://svgwg.org/svg2-draft/text.html
	text: elements.SVGTextElement;
	tspan: elements.SVGTSpanElement;
	textPath: elements.SVGTextPathElement;

	// https://svgwg.org/svg2-draft/embedded.html
	image: elements.SVGImageElement;
	foreignObject: elements.SVGForeignObjectElement;

	// https://svgwg.org/svg2-draft/painting.html
	marker: elements.SVGMarkerElement;

	// https://svgwg.org/svg2-draft/pservers.html
	linearGradient: elements.SVGLinearGradientElement;
	radialGradient: elements.SVGRadialGradientElement;
	stop: elements.SVGStopElement;
	pattern: elements.SVGPatternElement;
}

export * from './css-properties';
export * from './elements';
export * from './mixins';
export * from './shadow-animation';
export * from './svg-angle';
export * from './svg-animated-angle';
export * from './svg-animated-boolean';
export * from './svg-animated-enumeration';
export * from './svg-animated-integer';
export * from './svg-animated-length';
export * from './svg-animated-length-list';
export * from './svg-animated-number';
export * from './svg-animated-number-list';
export * from './svg-animated-preserve-aspect-ratio';
export * from './svg-animated-rect';
export * from './svg-animated-string';
export * from './svg-animated-transform-list';
export * from './svg-length';
export * from './svg-length-list';
export * from './svg-number';
export * from './svg-number-list';
export * from './svg-point-list';
export * from './svg-preserve-aspect-ratio';
export * from './svg-string-list';
export * from './svg-transform';
export * from './svg-transform-list';
export * from './svg-unit-types';
export * from './svg-use-element-shadow-root';

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
}

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
export * from './svg-preserve-aspect-ratio';
export * from './svg-string-list';
export * from './svg-transform';
export * from './svg-transform-list';
export * from './svg-unit-types';
export * from './svg-use-element-shadow-root';

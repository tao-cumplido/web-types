/**
 * @spec https://svgwg.org/svg2-draft/geometry.html
 * @spec https://svgwg.org/svg2-draft/coords.html#VectorEffects
 * @spec https://svgwg.org/svg2-draft/paths.html#TheDProperty
 * @spec https://svgwg.org/svg2-draft/text.html
 * @spec https://svgwg.org/svg2-draft/painting.html
 * @spec https://svgwg.org/svg2-draft/interact.html#PointerEventsProp
 */
export interface SVGCSSProperties extends SVGCSSProperties.Animatable {}

export namespace SVGCSSProperties {
	export interface Animatable {
		'cx': string;
		'cy': string;
		'r': string;
		'rx': string;
		'ry': string;
		'x': string;
		'y': string;
		'vector-effect': string;
		'd': string;
		'inline-size': string;
		'shape-subtract': string;
		'text-anchor': string;
		'fill': string;
		'fill-rule': string;
		'fill-opacity': string;
		'stroke': string;
		'stroke-opacity': string;
		'stroke-width': string;
		'stroke-linecap': string;
		'stroke-linejoin': string;
		'stroke-miterlimit': string;
		'stroke-dasharray': string;
		'stroke-dashoffset': string;
		'marker-start': string;
		'marker-mid': string;
		'marker-end': string;
		'marker': string;
		'paint-order': string;
		'color-interpolation': string;
		'shape-rendering': string;
		'text-rendering': string;
		'image-rendering': string;
		'pointer-events': string;
	}
}

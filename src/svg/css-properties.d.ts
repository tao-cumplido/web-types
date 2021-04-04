/**
 * @spec https://svgwg.org/svg2-draft/geometry.html
 * @spec https://svgwg.org/svg2-draft/coords.html#VectorEffects
 * @spec https://svgwg.org/svg2-draft/paths.html#TheDProperty
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
	}
}

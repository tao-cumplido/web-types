/** @spec https://drafts.csswg.org/css-ui-4/ */
export interface CSSUserInterfaceProperties extends CSSUserInterfaceProperties.Animatable {}

export namespace CSSUserInterfaceProperties {
	export interface Animatable {
		'outline': string;
		'outline-width': string;
		'outline-style': string;
		'outline-color': string;
		'outline-offset': string;
		'resize': string;
		'cursor': string;
		'caret-color': string;
		'caret-shape': string;
		'caret': string;
		'user-select': string;
		'appearance': string;
	}
}

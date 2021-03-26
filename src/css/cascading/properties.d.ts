/**
 * @spec https://drafts.csswg.org/css-cascade-3/
 * @spec https://drafts.csswg.org/css-cascade-4/
 * @spec https://drafts.csswg.org/css-cascade-5/
 */
export interface CSSCascadingProperties extends CSSCascadingProperties.Animatable {}

export namespace CSSCascadingProperties {
	export interface Animatable {
		'all': string;
	}
}

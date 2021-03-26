/** @spec https://compat.spec.whatwg.org/#css-properties */
export interface CSSCompatibilityProperties extends CSSCompatibilityProperties.Animatable {
	/** @deprecated */
	'-webkit-animation-name': string;
	/** @deprecated */
	'-webkit-animation-duration': string;
	/** @deprecated */
	'-webkit-animation-timing-function': string;
	/** @deprecated */
	'-webkit-animation-iteration-count': string;
	/** @deprecated */
	'-webkit-animation-direction': string;
	/** @deprecated */
	'-webkit-animation-play-state': string;
	/** @deprecated */
	'-webkit-animation-delay': string;
	/** @deprecated */
	'-webkit-animation-fill-mode': string;
	/** @deprecated */
	'-webkit-animation': string;
}

export namespace CSSCompatibilityProperties {
	export interface Animatable {
		/** @deprecated */
		'-webkit-align-items': string;
		/** @deprecated */
		'-webkit-align-content': string;
		/** @deprecated */
		'-webkit-align-self': string;
		/** @deprecated */
		'-webkit-background-origin': string;
		/** @deprecated */
		'-webkit-background-size': string;
		/** @deprecated */
		'-webkit-border-bottom-left-radius': string;
		/** @deprecated */
		'-webkit-border-bottom-right-radius': string;
		/** @deprecated */
		'-webkit-border-top-left-radius': string;
		/** @deprecated */
		'-webkit-border-top-right-radius': string;
		/** @deprecated */
		'-webkit-border-radius': string;
		/** @deprecated */
		'-webkit-box-shadow': string;
		/** @deprecated */
		'-webkit-flex': string;
		/** @deprecated */
		'-webkit-flex-basis': string;
		/** @deprecated */
		'-webkit-flex-direction': string;
		/** @deprecated */
		'-webkit-flex-flow': string;
		/** @deprecated */
		'-webkit-flex-grow': string;
		/** @deprecated */
		'-webkit-flex-shrink': string;
		/** @deprecated */
		'-webkit-flex-wrap': string;
		/** @deprecated */
		'-webkit-justify-content': string;
		/** @deprecated */
		'-webkit-order': string;

		/** @deprecated */
		'-webkit-box-align': string;
		/** @deprecated */
		'-webkit-box-flex': string;
		/** @deprecated */
		'-webkit-box-ordinal-group': string;
		/** @deprecated */
		'-webkit-box-orient': string;
		/** @deprecated */
		'-webkit-box-pack': string;

		/** @deprecated */
		'-webkit-background-clip': string;
		/** @deprecated */
		'-webkit-text-fill-color': string;
		/** @deprecated */
		'-webkit-text-stroke-color': string;
		/** @deprecated */
		'-webkit-text-stroke-width': string;
		/** @deprecated */
		'-webkit-text-stroke': string;
	}
}

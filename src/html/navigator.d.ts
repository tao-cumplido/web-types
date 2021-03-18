/** @spec https://html.spec.whatwg.org/multipage/system-state.html#the-navigator-object */
export interface Navigator extends Navigator.Interface {}

/** @exposed Window */
export namespace Navigator {
	export interface Prototype {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

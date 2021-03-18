/** @spec https://html.spec.whatwg.org/multipage/window-object.html#browser-interface-elements */
export interface BarProp extends BarProp.Interface {}

/** @exposed Window */
export namespace BarProp {
	export interface Prototype {
		readonly visible: boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

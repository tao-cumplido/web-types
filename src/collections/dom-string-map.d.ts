/** @spec https://html.spec.whatwg.org/multipage/dom.html#domstringmap */
export interface DOMStringMap extends DOMStringMap.Interface {}

/** @exposed Window */
export namespace DOMStringMap {
	// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
	export interface Prototype {
		[name: string]: string;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

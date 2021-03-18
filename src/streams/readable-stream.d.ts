/** @spec https://streams.spec.whatwg.org/#rs-class */
export interface ReadableStream extends ReadableStream.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 * @exposed Worklet
 */
export namespace ReadableStream {
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

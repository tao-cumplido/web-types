/** @spec https://html.spec.whatwg.org/multipage/media.html#timeranges */
export interface TimeRanges extends TimeRanges.Interface {}

/** @exposed Window */
export namespace TimeRanges {
	export interface Prototype {
		readonly length: number;

		start(index: number): number;
		end(index: number): number;
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

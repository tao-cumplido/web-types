import type { IndexedIterable } from '../../iterable';

/** @spec https://drafts.csswg.org/cssom/#the-medialist-interface */
export interface MediaList extends MediaList.Interface {}

/** @exposed Window */
export namespace MediaList {
	export interface Prototype extends IndexedIterable<string> {
		readonly length: number;
		mediaText: string;
		item(index: number): string | null;
		appendMedium(medium: string): void;
		deleteMedium(medium: string): void;
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

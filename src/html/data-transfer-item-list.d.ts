import type { File } from '../file';
import type { IndexedIterable } from '../iterable';
import type { DataTransferItem } from './data-transafer-item';

/** @spec https://html.spec.whatwg.org/multipage/dnd.html#the-datatransferitemlist-interface */
export interface DataTransferItemList extends DataTransferItemList.Interface {}

/** @exposed Window */
export namespace DataTransferItemList {
	export interface Prototype extends IndexedIterable<DataTransferItem> {
		readonly length: number;

		add(data: string, type: string): DataTransferItem | null;
		add(data: File): DataTransferItem | null;
		remove(index: number): void;
		clear(): void;
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

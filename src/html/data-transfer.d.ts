import type { Element } from '../dom';
import type { FileList } from '../file';
import type { DataTransferItemList } from './data-transfer-item-list';

/** @spec https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface */
export interface DataTransfer extends DataTransfer.Interface {}

/** @exposed Window */
export namespace DataTransfer {
	type DropEffect = 'none' | 'copy' | 'link' | 'move';
	type EffectAllowed = DropEffect | 'copyLink' | 'copyMove' | 'all' | 'uninitialized';

	export interface Prototype {
		readonly items: DataTransferItemList;
		readonly types: readonly string[];
		readonly files: FileList;

		dropEffect: DropEffect;
		effectAllowed: EffectAllowed;

		setDragImage(image: Element, x: number, y: number): void;
		getData(format: string): string;
		setData(format: string, data: string): void;
		clearData(format: string): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (): DataTransfer;
	}
}

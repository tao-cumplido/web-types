import type { File } from '../file';

/** @spec https://html.spec.whatwg.org/multipage/dnd.html#functionstringcallback */
export type FunctionStringCallback = (data: string) => void;

/** @spec https://html.spec.whatwg.org/multipage/dnd.html#the-datatransferitem-interface */
export interface DataTransferItem extends DataTransferItem.Interface {}

/** @exposed Window */
export namespace DataTransferItem {
	export interface Prototype {
		readonly kind: 'string' | 'file';
		readonly type: string;

		getAsString(callback: FunctionStringCallback | null): void;
		getAsFile(): File | null;
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

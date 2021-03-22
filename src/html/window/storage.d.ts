/** @spec https://html.spec.whatwg.org/multipage/webstorage.html#the-storage-interface */
export interface Storage extends Storage.Interface {}

/** @exposed Window */
export namespace Storage {
	export type NamedProperties = Storage & Record<string, string>;

	export interface Prototype {
		readonly length: number;
		key(index: number): string | null;
		getItem(key: string): string | null;
		setItem(key: string, value: string): void;
		removeItem(key: string): void;
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

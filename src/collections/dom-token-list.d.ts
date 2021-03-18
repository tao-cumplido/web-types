import type { IndexedIterable, KeyValueIterable } from '../iterable';

/** @spec https://dom.spec.whatwg.org/#interface-domtokenlist */
export interface DOMTokenList extends DOMTokenList.Interface {}

/** @exposed Window */
export namespace DOMTokenList {
	export interface Prototype extends IndexedIterable<string>, KeyValueIterable<number, string> {
		readonly length: number;

		value: string;

		item(index: number): string | null;
		contains(token: string): boolean;
		add(...tokens: string[]): void;
		remove(...tokens: string[]): void;
		toggle(token: string, force?: boolean): boolean;
		replace(token: string, newToken: string): boolean;
		supports(token: string): boolean;
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

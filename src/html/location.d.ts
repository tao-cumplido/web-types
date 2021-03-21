import type { DOMStringList } from '../collections';

/** @spec https://html.spec.whatwg.org/multipage/history.html#the-location-interface */
export interface Location extends Location.Interface {}

/** @exposed Window */
export namespace Location {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Prototype {}

	export interface LegacyUnforgeable {
		readonly origin: string;
		readonly ancestorOrigins: DOMStringList;

		href: string;
		protocol: string;
		host: string;
		hostname: string;
		port: '' | `${number}`;
		pathname: string;
		search: string;
		hash: string;

		assign(url: string): void;
		replace(url: string): void;
		reload(): void;
	}

	export type Interface = LegacyUnforgeable;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

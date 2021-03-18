import type { KeyValueIterable } from '../iterable';

/** @spec https://fetch.spec.whatwg.org/#typedefdef-headersinit */
type HeadersInit = Array<[string, string]> | Record<string, string> | KeyValueIterable<string, string>;

/** @spec https://fetch.spec.whatwg.org/#headers-class */
export interface Headers extends Headers.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace Headers {
	export interface Prototype extends KeyValueIterable<string, string> {
		append(name: string, value: string): void;
		delete(name: string): void;
		get(name: string): string | null;
		has(name: string): boolean;
		set(name: string, value: string): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (init?: HeadersInit): Headers;
	}
}

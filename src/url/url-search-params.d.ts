import type { KeyValueIterable } from '../iterable';

/** @spec https://url.spec.whatwg.org/#interface-urlsearchparams */
export interface URLSearchParams extends URLSearchParams.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace URLSearchParams {
	export interface Prototype extends KeyValueIterable<string, string> {
		append(name: string, value: string): void;
		delete(name: string): void;
		get(name: string): string | null;
		getAll(name: string): string[];
		has(name: string): boolean;
		set(name: string, value: string): void;
		sort(): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (init?: string[][] | Record<string, string> | string): URLSearchParams;
	}
}

import type { KeyValueIterable } from './key-value-iterable';

export interface ReadonlySetLike<T, A extends [T] = [value: T]> extends KeyValueIterable<T, T> {
	readonly size: number;
	has(...args: A): boolean;
}

export interface SetLike<T, A extends [T] = [value: T]> extends ReadonlySetLike<T, A> {
	add(...args: A): this;
	clear(): void;
	delete(...args: A): boolean;
}

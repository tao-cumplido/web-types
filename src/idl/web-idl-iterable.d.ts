export interface WebIDLIterable<Key, Value> {
	[Symbol.iterator](): IterableIterator<Value>;
	entries(): IterableIterator<[Key, Value]>;
	keys(): IterableIterator<Key>;
	values(): IterableIterator<Value>;
	forEach(callback: (value: Value, key: Key, source: this) => void, thisArg?: unknown): void;
}

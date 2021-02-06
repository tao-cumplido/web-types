export interface IndexedIterable<Value> {
	[index: number]: Value;
	[Symbol.iterator](): IterableIterator<Value>;
}

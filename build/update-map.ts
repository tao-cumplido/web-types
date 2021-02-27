export function updateMap<Key, Value>(
	source: Map<Key, Value>,
	key: Key,
	update: (value: Value) => Value,
	defaultValue: Value,
): void {
	const value = source.get(key);
	source.set(key, value ? update(value) : defaultValue);
}

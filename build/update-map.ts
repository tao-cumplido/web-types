export function updateMap<Key, Value>(
	source: Map<Key, Value>,
	key: Key,
	update: (value: Value) => Value,
	defaultValue: Value,
): Map<Key, Value> {
	const value = source.get(key);
	source.set(key, value ? update(value) : defaultValue);
	return source;
}

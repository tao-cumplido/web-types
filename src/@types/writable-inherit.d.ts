export type WritableInherit<T extends Record<keyof T, unknown>, WritableKeys extends keyof T = keyof T> =
	& Omit<
		T,
		WritableKeys
	>
	& {
		-readonly [P in WritableKeys]: T[P];
	};

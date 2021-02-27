export type WritableInherit<T extends Record<keyof T, unknown>, ReadonlyKeys extends keyof T = keyof T> = Omit<
	T,
	ReadonlyKeys
> &
	{
		-readonly [P in ReadonlyKeys]: T[P];
	};

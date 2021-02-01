export type IntersectionOf<T> = (T extends unknown ? (x: T) => unknown : never) extends (x: infer U) => unknown
	? { [P in keyof U]: U[P] }
	: never;

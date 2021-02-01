import type { IntersectionOf } from './intersection-of';

export type Merge<A, B> = IntersectionOf<
	| (A | B extends infer C ? { [P in C extends unknown ? keyof C : never]: C[P] } : never)
	| Omit<IntersectionOf<A | B>, keyof (A | B)>
>;

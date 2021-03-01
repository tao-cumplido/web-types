import type { JSDocableNode, JSDocTag } from 'ts-morph';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Guard<V = any, R extends V = any> = (value: V) => value is R;

type ExtractInput<Guards extends Guard[]> = {
	[P in keyof Guards]: Guards[P] extends Guard<infer V> ? V : never;
}[number];

type ExtractAssertion<Guards extends Guard[]> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[P in keyof Guards]: Guards[P] extends Guard<any, infer R> ? R : never;
}[number];

export function guardsUnion<Guards extends Guard[]>(
	...guards: Guards
): (value: ExtractInput<Guards>) => value is ExtractAssertion<Guards> {
	// @ts-expect-error: typescript can't infer matching types here
	return (value) => guards.some((guard) => guard(value));
}

export function docTags(node: JSDocableNode): JSDocTag[] {
	return node.getJsDocs().flatMap((doc) => doc.getTags());
}

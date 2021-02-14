import type { Node } from '../nodes';

export interface ChildNode {
	before(...nodes: Array<Node | string>): void;
	after(...nodes: Array<Node | string>): void;
	replaceWith(...nodes: Array<Node | string>): void;
	remove(): void;
}

export namespace ChildNode {
	export interface Unscopables {
		before: true;
		after: true;
		replaceWith: true;
		remove: true;
	}
}

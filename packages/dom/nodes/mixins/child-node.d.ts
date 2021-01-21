import type { Node } from '../node';

export declare interface ChildNode {
	before: (...nodes: Array<Node | string>) => void;
	after: (...nodes: Array<Node | string>) => void;
	replaceWith: (...nodes: Array<Node | string>) => void;
	remove: () => void;
}

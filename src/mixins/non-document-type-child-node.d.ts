import type { Element } from '../nodes';

export interface NonDocumentTypeChildNode {
	readonly previousElementSibling: Element | null;
	readonly nextElementSibling: Element | null;
}

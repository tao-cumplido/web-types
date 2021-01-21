import type { Element } from '../element';

export interface NonDocumentTypeChildNode {
	readonly previousElementSibling: Element | null;
	readonly nextElementSibling: Element | null;
}

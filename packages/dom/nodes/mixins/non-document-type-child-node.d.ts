import type { Element } from '../element';

export declare interface NonDocumentTypeChildNode {
	readonly previousElementSibling: Element | null;
	readonly nextElementSibling: Element | null;
}

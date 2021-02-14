import type { Element } from '../nodes';

export interface NonElementParentNode {
	getElementById(elementId: string): Element | null;
}

import type { Element } from '../element';

export interface NonElementParentNode {
	getElementById(elementId: string): Element | null;
}

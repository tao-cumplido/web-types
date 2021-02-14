import type { Element } from '../nodes';

export interface DocumentOrShadowRoot {
	readonly activeElement: Element | null;
}

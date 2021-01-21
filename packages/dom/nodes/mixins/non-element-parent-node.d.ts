import type { Element } from '../element';

export declare interface NonElementParentNode {
	getElementById: (elementId: string) => Element | null;
}

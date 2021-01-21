import type { DocumentFragment, DocumentFragmentConstructor } from './document-fragment';
import type { DocumentOrShadowRoot } from './mixins';

export interface ShadowRoot extends DocumentFragment, DocumentOrShadowRoot {}

export interface ShadowRootConstructor extends DocumentFragmentConstructor {
	prototype: ShadowRoot;
	/** @abstract */
	new (): ShadowRoot;
}

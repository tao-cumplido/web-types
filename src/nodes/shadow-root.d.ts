/** @Window */

import type { EventHandler } from '../event';
import type { DocumentFragment, DocumentFragmentConstructor } from './document-fragment';
import type { Element } from './element';
import type { DocumentOrShadowRoot } from './mixins';

export type ShadowRootMode = 'open' | 'closed';

export interface ShadowRoot extends DocumentFragment, DocumentOrShadowRoot {
	readonly mode: ShadowRootMode;
	readonly host: Element;
	onslotchange: EventHandler<this>;
}

export interface ShadowRootConstructor extends DocumentFragmentConstructor {
	prototype: ShadowRoot;
	/** @abstract */
	new (): ShadowRoot;
}

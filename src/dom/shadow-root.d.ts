import type { DocumentFragment } from './document-fragment';
import type { Element } from './element';
import type { EventHandler } from './event-target';
import type { DocumentOrShadowRoot, InnerHTML } from './mixins';

/**
 * @idlType
 * @spec https://dom.spec.whatwg.org/#enumdef-shadowrootmode
 */
export type ShadowRootMode = 'open' | 'closed';

/** @spec https://dom.spec.whatwg.org/#interface-shadowroot */
export interface ShadowRoot extends ShadowRoot.Interface {}

/** @exposed Window */
export namespace ShadowRoot {
	export interface Prototype extends DocumentFragment.Prototype, DocumentOrShadowRoot, InnerHTML {
		readonly mode: ShadowRootMode;
		readonly host: Element;
		onslotchange: EventHandler;
	}

	export type Interface = Prototype & DocumentFragment.Interface;

	export interface Static extends DocumentFragment.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

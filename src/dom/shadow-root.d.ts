import type { DocumentFragment } from './document-fragment';
import type { Element } from './element';
import type { Event } from './event';
import type { EventHandlerMap } from './event-target';
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
	export interface EventTypes {
		slotchange: Event;
	}
	export interface Prototype
		extends DocumentFragment.Prototype<EventTypes>, EventHandlerMap<EventTypes>, DocumentOrShadowRoot, InnerHTML
	{
		readonly mode: ShadowRootMode;
		readonly host: Element;
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

import type { Event } from '../event';
import type { DocumentOrShadowRoot } from '../mixins';
import type { DocumentFragment } from './document-fragment';
import type { Element } from './element';

export interface ShadowRoot extends ShadowRoot.Interface {}

/**
 * @exposed Window
 */
export namespace ShadowRoot {
	export type Mode = 'open' | 'closed';

	export interface Prototype extends DocumentFragment.Prototype, DocumentOrShadowRoot {
		readonly mode: Mode;
		readonly host: Element;
		onslotchange: Event.Handler<this>;
	}

	export type Interface = Prototype & DocumentFragment.Interface;

	export interface Static extends DocumentFragment.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): ShadowRoot;
	}
}

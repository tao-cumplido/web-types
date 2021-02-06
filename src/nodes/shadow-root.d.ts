import type { EventHandler } from '../event';
import type { DocumentFragment } from './document-fragment';
import type { Element } from './element';
import type { DocumentOrShadowRoot } from './mixins';

export type ShadowRootMode = 'open' | 'closed';

export interface ShadowRoot extends ShadowRoot.Interface {}

/**
 * @exposed Window
 */
export namespace ShadowRoot {
	export interface Prototype extends DocumentFragment.Prototype, DocumentOrShadowRoot {
		readonly mode: ShadowRootMode;
		readonly host: Element;
		onslotchange: EventHandler<this>;
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

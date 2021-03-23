import type { Element, ProcessingInstruction } from '../../dom';
import type { CSSStyleSheet } from './css-style-sheet';
import type { MediaList } from './media-list';

/** @spec https://drafts.csswg.org/cssom/#the-stylesheet-interface */
export interface StyleSheet extends StyleSheet.Interface {}

/** @exposed Window */
export namespace StyleSheet {
	export interface Prototype {
		readonly type: 'text/css';
		readonly href: string | null;
		readonly ownerNode: Element | ProcessingInstruction | null;
		readonly parenStyleSheet: CSSStyleSheet | null;
		readonly title: string | null;
		/** @putForwards mediaText */
		readonly media: MediaList;
		disabled: boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

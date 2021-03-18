import type { ValueOf } from '../../@types';
import type { Node } from '../node';

/** @spec https://dom.spec.whatwg.org/#interface-nodefilter */
export type NodeFilter = NodeFilter.Interface;

// ts-morph errors when this is as next-line between jsdoc and namespace
/* eslint-disable @typescript-eslint/no-redeclare */
/** @exposed Window */
export namespace NodeFilter {
	/* eslint-enable @typescript-eslint/no-redeclare */
	export interface Results {
		readonly FILTER_ACCEPT: 1;
		readonly FILTER_REJECT: 2;
		readonly FILTER_SKIP: 3;
	}

	export interface WhatToShow {
		readonly SHOW_ALL: 0xffff_ffff;
		readonly SHOW_ELEMENT: 0x1;
		readonly SHOW_ATTRIBUTE: 0x2;
		readonly SHOW_TEXT: 0x4;
		readonly SHOW_CDATA_SECTION: 0x8;
		/** @deprecated */
		readonly SHOW_ENTITY_REFERENCE: 0x10;
		/** @deprecated */
		readonly SHOW_ENTITY: 0x20;
		readonly SHOW_PROCESSING_INSTRUCTION: 0x40;
		readonly SHOW_COMMENT: 0x80;
		readonly SHOW_DOCUMENT: 0x100;
		readonly SHOW_DOCUMENT_TYPE: 0x200;
		readonly SHOW_DOCUMENT_FRAGMENT: 0x400;
		/** @deprecated */
		readonly SHOW_NOTATION: 0x800;
	}

	export type Callback = (node: Node) => ValueOf<Results> | undefined;

	export type Interface = Callback | { acceptNode: Callback };

	export interface Constructor extends Results, WhatToShow {
		/** @abstract */
		new(): never;
	}
}

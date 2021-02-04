/** @Window */

import type { NodeTypes } from './node';
import type { Text, TextConstructor } from './text';

export interface CDATASection extends Text {
	readonly nodeType: NodeTypes['CDATA_SECTION_NODE'];
	readonly nodeName: '#cdata-section';
}

export interface CDATASectionConstructor extends TextConstructor {
	prototype: CDATASection;
	/** @abstract */
	new (): CDATASection;
}

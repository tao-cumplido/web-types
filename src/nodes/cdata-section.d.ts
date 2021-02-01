import type { NodeTypes } from './node';
import type { Text } from './text';

export interface CDATASection extends Text {
	readonly nodeType: NodeTypes['CDATA_SECTION_NODE'];
	readonly nodeName: '#cdata-section';
}

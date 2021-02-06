import type { ValueOf } from '../@types';
import type { Node } from '../nodes';

export interface XPathResult extends XPathResult.Interface {}

/**
 * @exposed Window
 */
export namespace XPathResult {
	export interface ResultTypesLegacyEnum {
		readonly ANY_TYPE: 0;
		readonly NUMBER_TYPE: 1;
		readonly STRING_TYPE: 2;
		readonly BOOLEAN_TYPE: 3;
		readonly UNORDERED_NODE_ITERATOR_TYPE: 4;
		readonly ORDERED_NODE_ITERATOR_TYPE: 5;
		readonly UNORDERED_NODE_SNAPSHOT_TYPE: 6;
		readonly ORDERED_NODE_SNAPSHOT_TYPE: 7;
		readonly ANY_UNORDERED_NODE_TYPE: 8;
		readonly FIRST_ORDERED_NODE_TYPE: 9;
	}

	export interface Prototype extends ResultTypesLegacyEnum {
		readonly resultType: ValueOf<ResultTypesLegacyEnum>;
		readonly numberValue: number;
		readonly stringValue: string;
		readonly booleanValue: boolean;
		readonly singleNodeValue: Node | null;
		readonly invalidIteratorState: boolean;
		readonly snapshotLength: number;

		iterateNext(): Node | null;
		snapshotItem(index: number): Node | null;
	}

	export type Interface = Prototype;

	export interface Static extends ResultTypesLegacyEnum {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): XPathResult;
	}
}

import type { Text } from './text';

/** @spec https://dom.spec.whatwg.org/#interface-cdatasection */
export interface CDATASection extends CDATASection.Interface {}

/** @exposed Window */
export namespace CDATASection {
	export interface Prototype extends Text.Prototype<Text.Type.CDATASection> {}

	export type Interface = Prototype & Text.Interface<Text.Type.CDATASection>;

	export interface Static extends Text.Static<Text.Type.CDATASection> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

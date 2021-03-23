import type { Document, XMLDocument } from '../../dom';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype
 */
export type DOMParserSupportedType =
	| 'text/html'
	| 'text/xml'
	| 'application/xml'
	| 'application/xhtml+xml'
	| 'image/svg+xml';

/** @spec https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization */
export interface DOMParser extends DOMParser.Interface {}

/** @exposed Window */
export namespace DOMParser {
	export interface Prototype {
		parseFromString(string: string, type: 'text/html'): Document.NamedProperties;
		parseFromString(string: string, type: Exclude<DOMParserSupportedType, 'text/html'>): XMLDocument;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(): DOMParser;
	}
}

import type { DOMTokenList, NamedNodeMap } from '../collections';
import type { Attr } from './attr';
import type { Document } from './document';
import type {
	ARIAMixin,
	ChildNode,
	DocumentOrElement,
	InnerHTML,
	NonDocumentTypeChildNode,
	ParentNode,
	Slottable,
} from './mixins';
import type { Node } from './node';
import type { ShadowRoot, ShadowRootMode } from './shadow-root';

/** @spec https://dom.spec.whatwg.org/#dictdef-shadowrootinit */
export interface ShadowRootInit {
	mode: ShadowRootMode;
	delegatesFocus?: boolean;
}

/**
 * @spec https://dom.spec.whatwg.org/#interface-element
 * @spec https://w3c.github.io/DOM-Parsing/#extensions-to-the-element-interface
 */
export interface Element extends Element.Interface {}

/** @exposed Window */
export namespace Element {
	export type InsertPosition = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';

	export interface Unscopables extends ParentNode.Unscopables, ChildNode.Unscopables {
		slot: true;
	}

	export interface Prototype
		extends Node.Prototype,
			ParentNode,
			NonDocumentTypeChildNode,
			ChildNode,
			Slottable,
			DocumentOrElement,
			InnerHTML,
			ARIAMixin {
		readonly [Symbol.unscopables]: Unscopables;

		readonly nodeType: Node.NodeTypes['ELEMENT_NODE'];
		readonly ownerDocument: Document.NamedProperties;

		readonly namespaceURI: string | null;
		readonly prefix: string | null;
		readonly localName: string;
		readonly tagName: string;

		/** @putForwards value */
		readonly classList: DOMTokenList;

		readonly attributes: NamedNodeMap.LegacyUnenumerableNamedProperties<this>;

		readonly shadowRoot: ShadowRoot | null;

		nodeValue: null;
		textContent: string;

		id: string;
		className: string;
		slot: string;

		/** @legacyNullToEmptyString */
		outerHTML: string;

		hasAttributes(): boolean;
		getAttributeNames(): string[];
		getAttribute(qualifiedName: string): string | null;
		getAttributeNS(namespace: string | null, localName: string): string | null;
		setAttribute(qualifiedName: string, value: string): void;
		setAttributeNS(namespace: string | null, localName: string, value: string): void;
		removeAttribute(qualifiedName: string): void;
		removeAttributeNS(namespace: string | null, localName: string): void;
		toggleAttribute(qualifiedName: string, force?: boolean): boolean;
		hasAttribute(qualifiedName: string): boolean;
		hasAttributeNS(namespace: string | null, localName: string): boolean;

		getAttributeNode(qualifiedName: string): Attr<this> | null;
		getAttributeNodeNS(namespace: string | null, localName: string): Attr<this> | null;
		setAttributeNode(attr: Attr): Attr<this> | null;
		setAttributeNodeNS(attr: Attr): Attr<this> | null;
		removeAttributeNode(attr: Attr): Attr<null>;

		attachShadow(init: ShadowRootInit): ShadowRoot;

		closest<Selector extends string>(selectors: Selector): ParentNode.ElementLookup<Selector> | null;
		closest<Result extends Element>(selectors: string): Result | null;
		matches(selectors: string): boolean;

		insertAdjacentHTML(position: InsertPosition, text: string): void;

		/** @deprecated legacy alias of .matches */
		webkitMatchesSelector(selectors: string): boolean;
		/** @deprecated */
		insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
		/** @deprecated */
		insertAdjacentText(where: InsertPosition, data: string): void;
	}

	export type Interface = Prototype & Node.Interface;

	export interface Static extends Node.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

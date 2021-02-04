/** @Window */

import type { DOMTokenList } from '../sets';
import type { Attr } from './attr';
import type { Document } from './document';
import type {
	ChildNode,
	DocumentOrElement,
	ElementMap,
	ElementSelector,
	NonDocumentTypeChildNode,
	ParentNode,
	Slottable,
} from './mixins';
import type { NamedNodeMap } from './named-node-map';
import type { Node, NodeConstructor, NodeTypes } from './node';
import type { ShadowRoot, ShadowRootMode } from './shadow-root';

export interface ShadowRootInit {
	mode: ShadowRootMode;
	delegatesFocus?: boolean;
}

export type InsertPosition = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';

export interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slottable, DocumentOrElement {
	readonly nodeType: NodeTypes['ELEMENT_NODE'];
	readonly ownerDocument: Document;
	readonly nodeValue: null;
	readonly textContent: string;

	readonly namespaceURI: string | null;
	readonly prefix: string | null;
	readonly localName: string;
	readonly tagName: string;

	readonly classList: DOMTokenList;

	readonly attributes: NamedNodeMap<this>;

	readonly shadowRoot: ShadowRoot | null;

	id: string;
	className: string;
	slot: string;

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

	closest<Selector extends string>(selectors: Selector): ElementSelector<Selector, ElementMap> | null;
	closest<Result extends Element>(selectors: string): Result | null;
	matches(selectors: string): boolean;

	/** @deprecated legacy alias of .matches */
	webkitMatchesSelector(selectors: string): boolean;
	/** @deprecated */
	insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
	/** @deprecated */
	insertAdjacentText(where: InsertPosition, data: string): void;
}

export interface ElementConstructor extends NodeConstructor {
	prototype: Element;
	/** @abstract */
	new (): Element;
}

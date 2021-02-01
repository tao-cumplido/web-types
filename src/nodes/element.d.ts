/** @Window */

import type { Merge } from '../@types';
import type { HTMLElement } from '../html';
import type { DOMTokenList } from '../sets';
import type { SVGElement } from '../svg';
import type { Attr } from './attr';
import type { Document } from './document';
import type { HTMLCollection } from './html-collection';
import type {
	ChildNode,
	ElementSelector,
	HTMLElementMap,
	NonDocumentTypeChildNode,
	ParentNode,
	Slottable,
	SVGElementMap,
} from './mixins';
import type { ElementMap } from './mixins/parent-node';
import type { NamedNodeMap } from './named-node-map';
import type { Node, NodeConstructor, NodeTypes } from './node';
import type { ShadowRoot, ShadowRootMode } from './shadow-root';

export interface ShadowRootInit {
	mode: ShadowRootMode;
	delegatesFocus?: boolean;
}

export interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slottable {
	readonly nodeType: NodeTypes['ELEMENT_NODE'];
	readonly ownerDocument: Document;
	readonly nodeValue: null;
	readonly textContent: string;

	readonly namespaceURI: string | null;
	readonly prefix: string | null;
	readonly localName: string;
	readonly tagName: string;

	readonly classList: DOMTokenList;

	readonly attributes: NamedNodeMap;

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

	getAttributeNode(qualifiedName: string): Attr | null;
	getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
	setAttributeNode(attr: Attr): Attr | null;
	setAttributeNodeNS(attr: Attr): Attr | null;
	removeAttributeNode(attr: Attr): Attr;

	attachShadow(init: ShadowRootInit): ShadowRoot;

	closest<Selector extends string>(selectors: Selector): ElementSelector<Selector, ElementMap> | null;
	closest<Result extends Element>(selectors: string): Result | null;
	matches(selectors: string): boolean;

	getElementsByTagName<Tag extends string>(
		qualifiedName: Tag,
	): HTMLCollection<ElementSelector<Tag, Merge<HTMLElementMap, SVGElementMap>>>;
	getElementsByTagNameNS<Tag extends string>(
		namespace: 'http://www.w3.org/1999/xhtml',
		localName: Tag,
	): HTMLCollection<ElementSelector<Tag, HTMLElementMap, HTMLElement>>;
	getElementsByTagNameNS<Tag extends string>(
		namespace: 'http://www.w3.org/2000/svg',
		localName: Tag,
	): HTMLCollection<ElementSelector<Tag, SVGElementMap, SVGElement>>;
	getElementsByTagNameNS(namespace: string, localName: string): HTMLCollection;
	getElementsByClassName(classNames: string): HTMLCollection;

	/** @deprecated legacy alias of .matches */
	webkitMatchesSelector(selectors: string): boolean;
	/** @deprecated */
	insertAdjacentElement(where: string, element: Element): Element | null;
	/** @deprecated */
	insertAdjacentText(where: string, data: string): void;
}

export interface ElementConstructor extends NodeConstructor {
	prototype: Element;
	/** @abstract */
	new (): Element;
}

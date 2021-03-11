import type { Merge } from '../@types';
import type { HTMLCollection, NodeList } from '../collections';
import type { AutonomousCustomElementMap, HTMLElement, HTMLElementMap, HTMLSlotElement } from '../html';
import type { SVGElement, SVGElementMap } from '../svg';
import type { Element } from './element';
import type { Node } from './node';

/** @spec https://dom.spec.whatwg.org/#interface-nonelementparentnode */
export interface NonElementParentNode {
	getElementById(elementId: string): Element | null;
}

/**
 * @spec https://dom.spec.whatwg.org/#mixin-documentorshadowroot
 * @spec https://html.spec.whatwg.org/multipage/dom.html#the-documentorshadowroot-interface
 */
export interface DocumentOrShadowRoot {
	readonly activeElement: Element | null;
}

/** @spec https://dom.spec.whatwg.org/#interface-parentnode */
export interface ParentNode {
	readonly children: HTMLCollection.LegacyUnenumerableNamedProperties;
	readonly firstElementChild: Element | null;
	readonly lastElementChild: Element | null;
	readonly childElementCount: number;

	append(...nodes: Array<Node | string>): void;
	prepend(...nodes: Array<Node | string>): void;
	replaceChildren(...nodes: Array<Node | string>): void;

	querySelector<Selector extends string>(
		selectors: Selector,
	): ParentNode.ElementLookup<Selector, ParentNode.ElementMap> | null;
	querySelector<Result extends Element>(selectors: string): Result | null;
	querySelectorAll<Selector extends string>(
		selectors: Selector,
	): NodeList<ParentNode.ElementLookup<Selector, ParentNode.ElementMap>>;
	querySelectorAll<Result extends Element>(selectors: string): NodeList<Result>;
}

export namespace ParentNode {
	export type ElementMap = Merge<HTMLElementMap, Merge<SVGElementMap, AutonomousCustomElementMap>>;

	export type ElementLookup<
		Selector extends string,
		LookupMap extends Record<keyof LookupMap, Element> = ElementMap,
		Fallback extends Element = Element
	> = Lowercase<Selector> extends keyof LookupMap ? LookupMap[Lowercase<Selector>] : Fallback;

	export interface Unscopables {
		prepend: true;
		append: true;
		replaceChildren: true;
	}
}

/** @spec https://dom.spec.whatwg.org/#interface-nondocumenttypechildnode */
export interface NonDocumentTypeChildNode {
	readonly previousElementSibling: Element | null;
	readonly nextElementSibling: Element | null;
}

/** @spec https://dom.spec.whatwg.org/#interface-childnode */
export interface ChildNode {
	before(...nodes: Array<Node | string>): void;
	after(...nodes: Array<Node | string>): void;
	replaceWith(...nodes: Array<Node | string>): void;
	remove(): void;
}

export namespace ChildNode {
	export interface Unscopables {
		before: true;
		after: true;
		replaceWith: true;
		remove: true;
	}
}

/** @spec https://dom.spec.whatwg.org/#mixin-slotable */
export interface Slottable {
	readonly assignedSlot: HTMLSlotElement | null;
}

/**
 * @nonStandard
 * @spec https://dom.spec.whatwg.org/#interface-document
 * @spec https://dom.spec.whatwg.org/#interface-element
 */
export interface DocumentOrElement {
	getElementsByTagName<Tag extends string>(
		qualifiedName: Tag,
	): HTMLCollection.LegacyUnenumerableNamedProperties<
		ParentNode.ElementLookup<Tag, Merge<HTMLElementMap, SVGElementMap>>
	>;

	getElementsByTagName<Result extends Element>(
		qualifiedName: string,
	): HTMLCollection.LegacyUnenumerableNamedProperties<Result>;

	getElementsByTagNameNS<Tag extends string>(
		namespace: 'http://www.w3.org/1999/xhtml',
		localName: Tag,
	): HTMLCollection.LegacyUnenumerableNamedProperties<ParentNode.ElementLookup<Tag, HTMLElementMap, HTMLElement>>;

	getElementsByTagNameNS<Result extends HTMLElement>(
		namespace: 'http://www.w3.org/1999/xhtml',
		localName: string,
	): HTMLCollection.LegacyUnenumerableNamedProperties<Result>;

	getElementsByTagNameNS<Tag extends string>(
		namespace: 'http://www.w3.org/2000/svg',
		localName: Tag,
	): HTMLCollection.LegacyUnenumerableNamedProperties<ParentNode.ElementLookup<Tag, SVGElementMap, SVGElement>>;

	getElementsByTagNameNS<Result extends SVGElement>(
		namespace: 'http://www.w3.org/2000/svg',
		localName: string,
	): HTMLCollection.LegacyUnenumerableNamedProperties<Result>;

	getElementsByTagNameNS(namespace: string, localName: string): HTMLCollection.LegacyUnenumerableNamedProperties;

	getElementsByClassName(classNames: string): HTMLCollection.LegacyUnenumerableNamedProperties;
}

/** @spec https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin */
export interface InnerHTML {
	/** @legacyNullToEmptyString */
	innerHTML: string;
}

import type { Element } from '../element';
import type * as html from '../html';
import type { HTMLCollection } from '../html-collection';
import type { Node } from '../node';
import type { NodeList } from '../node-list';

type QuerySelector<
	Selector extends string,
	QueryMap extends Record<keyof QueryMap, Element>
> = Lowercase<Selector> extends keyof QueryMap ? QueryMap[Lowercase<Selector>] : Element;

export interface ElementQueryMap {
	slot: html.HTMLSlotElement;
}

export interface ParentNode<QueryMap extends Record<keyof QueryMap, Element> = ElementQueryMap> {
	readonly children: HTMLCollection;
	readonly firstElementChild: Element | null;
	readonly lastElementChild: Element | null;
	readonly childElementCount: number;

	append(...nodes: Array<Node | string>): void;
	prepend(...nodes: Array<Node | string>): void;
	replaceChildren(...nodes: Array<Node | string>): void;

	querySelector<Selector extends string>(selectors: Selector): QuerySelector<Selector, QueryMap> | null;
	querySelectorAll<Selector extends string>(selectors: Selector): NodeList<QuerySelector<Selector, QueryMap>>;
}

import type { Merge } from '../@types';
import type { HTMLCollection, NodeList } from '../collections';
import type { Element, Node } from '../dom';
import type { AutonomousCustomElementMap, HTMLElementMap } from '../html';
import type { SVGElementMap } from '../svg';

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

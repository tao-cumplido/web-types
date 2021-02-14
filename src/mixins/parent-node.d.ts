import type { Merge } from '../@types';
import type { AutonomousCustomElementMap, HTMLElementMap } from '../html';
import type { Element, HTMLCollection, Node, NodeList } from '../nodes';
import type { SVGElementMap } from '../svg';

export type ElementSelector<
	Selector extends string,
	ElementMap extends Record<keyof ElementMap, Element>,
	Fallback extends Element = Element
> = Lowercase<Selector> extends keyof ElementMap ? ElementMap[Lowercase<Selector>] : Fallback;

export type ElementMap = Merge<HTMLElementMap, Merge<SVGElementMap, AutonomousCustomElementMap>>;

export interface ParentNode {
	readonly children: HTMLCollection.LegacyUnenumerableNamedProperties;
	readonly firstElementChild: Element | null;
	readonly lastElementChild: Element | null;
	readonly childElementCount: number;

	append(...nodes: Array<Node | string>): void;
	prepend(...nodes: Array<Node | string>): void;
	replaceChildren(...nodes: Array<Node | string>): void;

	querySelector<Selector extends string>(selectors: Selector): ElementSelector<Selector, ElementMap> | null;
	querySelector<Result extends Element>(selectors: string): Result | null;
	querySelectorAll<Selector extends string>(selectors: Selector): NodeList<ElementSelector<Selector, ElementMap>>;
	querySelectorAll<Result extends Element>(selectors: string): NodeList<Result>;
}

export namespace ParentNode {
	export interface Unscopables {
		prepend: true;
		append: true;
		replaceChildren: true;
	}
}

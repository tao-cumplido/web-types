import type { Merge } from '../../@types';
import type { AutonomousCustomElementMap, HTMLElementMap } from '../../html';
import type { SVGElementMap } from '../../svg';
import type { Element } from '../element';
import type { HTMLCollection } from '../html-collection';
import type { Node } from '../node';
import type { NodeList } from '../node-list';

export type ElementSelector<
	Selector extends string,
	ElementMap extends Record<keyof ElementMap, Element>,
	Fallback extends Element = Element
> = Lowercase<Selector> extends keyof ElementMap ? ElementMap[Lowercase<Selector>] : Fallback;

export type ElementMap = Merge<HTMLElementMap, Merge<SVGElementMap, AutonomousCustomElementMap>>;

export interface ParentNode {
	readonly children: HTMLCollection;
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

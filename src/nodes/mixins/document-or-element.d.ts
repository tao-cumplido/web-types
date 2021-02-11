import type { Merge } from '../../@types';
import type { HTMLElement, HTMLElementMap } from '../../html';
import type { SVGElement, SVGElementMap } from '../../svg';
import type { Element } from '../element';
import type { HTMLCollection } from '../html-collection';
import type { ElementSelector } from './parent-node';

/** non-standard */
export interface DocumentOrElement {
	getElementsByTagName<Tag extends string>(
		qualifiedName: Tag,
	): HTMLCollection.LegacyUnenumerableNamedProperties<ElementSelector<Tag, Merge<HTMLElementMap, SVGElementMap>>>;

	getElementsByTagName<Result extends Element>(
		qualifiedName: string,
	): HTMLCollection.LegacyUnenumerableNamedProperties<Result>;

	getElementsByTagNameNS<Tag extends string>(
		namespace: 'http://www.w3.org/1999/xhtml',
		localName: Tag,
	): HTMLCollection.LegacyUnenumerableNamedProperties<ElementSelector<Tag, HTMLElementMap, HTMLElement>>;

	getElementsByTagNameNS<Result extends HTMLElement>(
		namespace: 'http://www.w3.org/1999/xhtml',
		localName: string,
	): HTMLCollection.LegacyUnenumerableNamedProperties<Result>;

	getElementsByTagNameNS<Tag extends string>(
		namespace: 'http://www.w3.org/2000/svg',
		localName: Tag,
	): HTMLCollection.LegacyUnenumerableNamedProperties<ElementSelector<Tag, SVGElementMap, SVGElement>>;

	getElementsByTagNameNS<Result extends SVGElement>(
		namespace: 'http://www.w3.org/2000/svg',
		localName: string,
	): HTMLCollection.LegacyUnenumerableNamedProperties<Result>;

	getElementsByTagNameNS(namespace: string, localName: string): HTMLCollection.LegacyUnenumerableNamedProperties;

	getElementsByClassName(classNames: string): HTMLCollection.LegacyUnenumerableNamedProperties;
}

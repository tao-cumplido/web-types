import type { Attr, Element } from '../dom';
import type { IndexedIterable } from '../iterable';

/** @spec https://dom.spec.whatwg.org/#interface-namednodemap */
export interface NamedNodeMap<Owner extends Element | null = Element | null> extends NamedNodeMap.Interface<Owner> {}

/** @exposed Window */
export namespace NamedNodeMap {
	export type LegacyUnenumerableNamedProperties<T extends Element | null = Element | null> = NamedNodeMap<T> &
		Record<string, Attr<T>>;

	export interface Prototype<Owner extends Element | null = Element | null> extends IndexedIterable<Owner> {
		readonly length: number;
		item(index: number): Attr<Owner> | null;
		getNamedItem(qualifiedName: string): Attr<Owner> | null;
		getNamedItemNS(namespace: string | null, localName: string): Attr<Owner> | null;
		setNamedItem(attr: Attr): Attr<Owner> | null;
		setNamedItemNS(attr: Attr): Attr<Owner> | null;
		removeNamedItem(qualifiedName: string): Attr<null>;
		removeNamedItemNS(namespace: string | null, localName: string): Attr<null>;
	}

	export type Interface<Owner extends Element | null = Element | null> = Prototype<Owner>;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

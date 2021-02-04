/** @Window */

import type { Attr } from './attr';
import type { Element } from './element';

export interface NamedNodeMap<Owner extends Element | null = Element | null> {
	[index: number]: Attr<Owner> | null;
	readonly length: number;
	[Symbol.iterator](): IterableIterator<Attr<Owner>>;
	item(index: number): Attr<Owner> | null;
	getNamedItem(qualifiedName: string): Attr<Owner> | null;
	getNamedItemNS(namespace: string | null, localName: string): Attr<Owner> | null;
	setNamedItem(attr: Attr): Attr<Owner> | null;
	setNamedItemNS(attr: Attr): Attr<Owner> | null;
	removeNamedItem(qualifiedName: string): Attr<null>;
	removeNamedItemNS(namespace: string | null, localName: string): Attr<null>;
}

export interface NamedNodeMapConstructor extends Function {
	prototype: NamedNodeMap;
	/** @abstract */
	new (): NamedNodeMap;
}

/** @Window */

import type { Merge } from '../@types';
import type { CustomEvent, Event } from '../event';
import type { HTMLElement, HTMLUnknownElement } from '../html';
import type { Range } from '../ranges';
import type { SVGElement } from '../svg';
import type { NodeFilter, NodeIterator, TreeWalker } from '../traversal';
import type { Attr } from './attr';
import type { CDATASection } from './cdata-section';
import type { Comment } from './comment';
import type { DocumentFragment } from './document-fragment';
import type { DocumentType } from './document-type';
import type { DOMImplementation } from './dom-implementation';
import type { Element } from './element';
import type { HTMLCollection } from './html-collection';
import type {
	AutonomousCustomElementMap,
	CustomizedBuiltInElementMap,
	DocumentOrShadowRoot,
	ElementSelector,
	HTMLElementMap,
	NonElementParentNode,
	ParentNode,
	SVGElementMap,
} from './mixins';
import type { Node, NodeConstructor, NodeTypes } from './node';
import type { ProcessingInstruction } from './processing-instruction';
import type { ShadowRoot } from './shadow-root';
import type { Text } from './text';

type CreateElement<Tag extends string, Is extends string> = ElementSelector<
	Is,
	CustomizedBuiltInElementMap,
	never
> extends never
	? ElementSelector<Tag, HTMLElementMap | AutonomousCustomElementMap, HTMLUnknownElement>
	: ElementSelector<Is, CustomizedBuiltInElementMap>;

export interface ElementCreationOptions<Is extends string = string> {
	is?: Is;
}

// TODO: use correct event interfaces
export interface CreateEventMap {
	beforeunloadevent: Event;
	compositionevent: Event;
	customevent: CustomEvent;
	devicemotionevent: Event;
	deviceorientationevent: Event;
	dragevent: Event;
	event: Event;
	events: Event;
	focusevent: Event;
	hashchangevent: Event;
	htmlevents: Event;
	keyboardevent: Event;
	messageevent: Event;
	mouseevent: Event;
	mouseevents: Event;
	storageevent: Event;
	svgevents: Event;
	textevent: Event;
	// skip touchevent, should be added manually if required
	uievent: Event;
	uievents: Event;
}

export interface Document<CDATA extends CDATASection = never>
	extends Node,
		NonElementParentNode,
		DocumentOrShadowRoot,
		ParentNode {
	readonly nodeType: NodeTypes['DOCUMENT_NODE'];
	readonly nodeName: '#document';
	readonly ownerDocument: null;
	readonly parentNode: null;
	readonly parentElement: null;
	readonly previousSibling: null;
	readonly nextSibling: null;
	readonly nodeValue: null;
	readonly textContent: null;

	readonly implementation: DOMImplementation;
	readonly URL: string;
	readonly documentURI: string;
	readonly compatMode: 'BackCompat' | 'CSS1Compat';
	readonly characterSet: string;
	readonly contentType: string;

	readonly docType: DocumentType | null;
	readonly documentElement: Element | null;

	/** @deprecated legacy alias of .characterSet */
	readonly charset: string;
	/** @deprecated legacy alias of .characterSet */
	readonly inputEncoding: string;

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

	createElement<Tag extends string, Is extends string>(
		localName: Tag,
		options?: ElementCreationOptions<Is>,
	): CreateElement<Tag, Is>;
	/** @deprecated */
	createElement<Tag extends string, Is extends string>(localName: Tag, options: Is): CreateElement<Tag, Is>;

	createElementNS<Tag extends string, Is extends string>(
		namespace: 'http://www.w3.org/1999/xhtml',
		qualifiedName: Tag,
		options?: ElementCreationOptions<Is>,
	): CreateElement<Tag, Is>;
	createElementNS<Tag extends string>(
		namespace: 'http://www.w3.org/2000/svg',
		qualifiedName: Tag,
	): ElementSelector<Tag, SVGElementMap, SVGElement>;
	createElementNS(namespace: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
	/** @deprecated */
	createElementNS<Tag extends string, Is extends string>(
		namespace: 'http://www.w3.org/1999/xhtml',
		qualifiedName: Tag,
		options: Is,
	): CreateElement<Tag, Is>;
	/** @deprecated */
	createElementNS<Tag extends string>(
		namespace: 'http://www.w3.org/2000/svg',
		qualifiedName: Tag,
		options: string | ElementCreationOptions,
	): ElementSelector<Tag, SVGElementMap, SVGElement>;
	/** @deprecated */
	createElementNS(namespace: string, qualifiedName: string, options: string): Element;

	createDocumentFragment(): DocumentFragment;
	createTextNode(data: string): Text;
	/** @deprecated */
	createCDATASection(data: string): CDATA;
	createComment(data: string): Comment;
	createProcessingInstruction(target: string, data: string): ProcessingInstruction;

	/** @deprecated */
	importNode(node: Document | ShadowRoot, deep?: boolean): never;
	importNode<T extends Node>(node: T, deep?: boolean): T;

	/** @deprecated */
	adoptNode(node: Document | ShadowRoot): never;
	adoptNode<T extends Node>(node: T): T;

	createAttribute(localName: string): Attr;
	createAttributeNS(namespace: string | null, qualifiedName: string): Attr;

	/** @deprecated */
	createEvent<Interface extends string>(
		interface: Interface,
	): Lowercase<Interface> extends keyof CreateEventMap ? CreateEventMap[Lowercase<Interface>] : never;
	/** @deprecated */
	createEvent(interface: string): never;

	createRange(): Range;

	createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator;
	createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null): TreeWalker;
}

export interface DocumentConstructor extends NodeConstructor {
	prototype: Document<CDATASection>;
	new (): Document;
}

export interface XMLDocument extends Document<CDATASection> {
	createCDATASection(data: string): CDATASection;
}

export interface XMLDocumentConstructor extends DocumentConstructor {
	prototype: XMLDocument;
	/** @abstract */
	new (): XMLDocument;
}

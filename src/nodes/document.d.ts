import type { Merge } from '../@types';
import type { CustomEvent, Event } from '../event';
import type {
	AutonomousCustomElementMap,
	CustomizedBuiltInElementMap,
	DocumentAndElementEventHandlers,
	EventHandler,
	GlobalEventHandlers,
	HTMLAnchorElement,
	HTMLAreaElement,
	HTMLBodyElement,
	HTMLElementMap,
	HTMLEmbedElement,
	HTMLFormElement,
	HTMLFrameSetElement,
	HTMLHeadElement,
	HTMLImageElement,
	HTMLScriptElement,
	HTMLUnknownElement,
	Location,
} from '../html';
import type { Window } from '../html/browser/window';
import type {
	DocumentOrElement,
	DocumentOrShadowRoot,
	ElementSelector,
	NonElementParentNode,
	ParentNode,
} from '../mixins';
import type { Range } from '../ranges';
import type { SVGElement, SVGElementMap, SVGScriptElement } from '../svg';
import type { NodeFilter, NodeIterator, TreeWalker } from '../traversal';
import type { XPathEvaluatorBase } from '../xpath';
import type { Attr } from './attr';
import type { CDATASection } from './cdata-section';
import type { Comment } from './comment';
import type { DocumentFragment } from './document-fragment';
import type { DocumentType } from './document-type';
import type { DOMImplementation } from './dom-implementation';
import type { Element } from './element';
import type { HTMLCollection } from './html-collection';
import type { Node } from './node';
import type { NodeList } from './node-list';
import type { ProcessingInstruction } from './processing-instruction';
import type { ShadowRoot } from './shadow-root';
import type { Text } from './text';

export interface ElementCreationOptions<Is extends string = string> {
	is?: Is;
}

export type DocumentReadyState = 'loading' | 'interactive' | 'complete';

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

export interface Document<Type extends Document.Type = Document.Type.HTML> extends Document.Interface<Type> {}

/**
 * @exposed Window
 */
export namespace Document {
	type CreateElement<Tag extends string, Is extends string> = ElementSelector<
		Is,
		CustomizedBuiltInElementMap,
		never
	> extends never
		? ElementSelector<Tag, Merge<HTMLElementMap, AutonomousCustomElementMap>, HTMLUnknownElement>
		: ElementSelector<Is, CustomizedBuiltInElementMap>;

	export enum Type {
		HTML = 'html',
		XML = 'xml',
	}

	// TODO: add named elements https://html.spec.whatwg.org/multipage/dom.html#dom-document-nameditem-filter
	export type NamedElements<T extends Type = Type.HTML> = Document<T> &
		Record<string, HTMLEmbedElement | HTMLFormElement | HTMLImageElement>;

	export interface Prototype<T extends Type = Type.HTML>
		extends Node.Prototype,
			NonElementParentNode,
			DocumentOrShadowRoot,
			ParentNode,
			DocumentOrElement,
			XPathEvaluatorBase,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers {
		readonly [Symbol.unscopables]: ParentNode.Unscopables;

		readonly nodeType: Node.NodeTypesLegacyEnum['DOCUMENT_NODE'];
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

		readonly referrer: string;
		readonly lastModified: string;
		readonly readyState: DocumentReadyState;

		readonly head: HTMLHeadElement | null;
		readonly images: HTMLCollection<HTMLImageElement>;
		readonly embeds: HTMLCollection<HTMLEmbedElement>;
		readonly plugins: HTMLCollection<HTMLEmbedElement>;
		readonly links: HTMLCollection<HTMLAnchorElement | HTMLAreaElement>;
		readonly forms: HTMLCollection<HTMLFormElement>;
		readonly scripts: HTMLCollection<HTMLScriptElement>;
		readonly currentScript: HTMLScriptElement | SVGScriptElement | null;

		readonly defaultView: Window.WindowProxy | null;

		/** @deprecated legacy alias of .characterSet */
		readonly charset: string;
		/** @deprecated legacy alias of .characterSet */
		readonly inputEncoding: string;

		domain: string;
		cookie: string;

		title: string;
		dir: '' | 'ltr' | 'rtl' | 'auto';
		body: HTMLBodyElement | HTMLFrameSetElement | null;

		designMode: string;

		onreadystatechange: EventHandler<this> | null;

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
		createCDATASection(data: string): T extends Type.HTML ? never : CDATASection;
		createComment(data: string): Comment;
		createProcessingInstruction(target: string, data: string): ProcessingInstruction;

		/** @deprecated */
		importNode(node: Document | ShadowRoot, deep?: boolean): never;
		importNode<N extends Node>(node: N, deep?: boolean): N;

		/** @deprecated */
		adoptNode(node: Document | ShadowRoot): never;
		adoptNode<N extends Node>(node: N): N;

		createAttribute(localName: string): Attr;
		createAttributeNS(namespace: string | null, qualifiedName: string): Attr;

		/** @deprecated */
		createEvent<Interface extends string>(
			interface: Interface,
		): Lowercase<Interface> extends keyof CreateEventMap ? CreateEventMap[Lowercase<Interface>] : never;
		/** @deprecated */
		createEvent(interface: string): never;

		createRange(): Range;

		createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter.Interface | null): NodeIterator;
		createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter.Interface | null): TreeWalker;

		getElementsByName(elementName: string): NodeList<Element>;

		open(url: string, name: string, features: string): Window.WindowProxy | null;
		/** @deprecated */
		open(unused1: string, unused2?: string): Document;
		open(): Document;
		close(): void;
		write(...text: string[]): void;
		writeln(...text: string[]): void;

		hasFocus(): boolean;
		execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
		queryCommandEnabled(commandId: string): boolean;
		queryCommandIndeterm(commandId: string): boolean;
		queryCommandState(commandId: string): boolean;
		queryCommandSupported(commandId: string): boolean;
		queryCommandValue(commandId: string): string;
	}

	export type Interface<T extends Type> = Prototype<T> & {
		/** @putForwards href */
		readonly location: Location | null;
	};

	export interface Static<T extends Type = Type.HTML> extends Node.Static {
		prototype: Prototype<T>;
	}

	export interface Constructor extends Static {
		new (): Document;
	}
}

export interface XMLDocument extends XMLDocument.Interface {}

/**
 * @exposed Window
 */
export namespace XMLDocument {
	export interface Prototype extends Document.Prototype<Document.Type.XML> {
		// not deprecated
		createCDATASection(data: string): CDATASection;
	}

	export type Interface = Prototype &
		Document.Interface<Document.Type.XML> & {
			/** @deprecated */
			open(unused1: string, unused2?: string): never;
			/** @deprecated */
			open(): never;
		};

	export interface Static extends Document.Static<Document.Type.XML> {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): XMLDocument;
	}
}

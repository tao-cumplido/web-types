import type { Merge } from '../@types';
import type { HTMLAllCollection, HTMLCollection, NodeList } from '../collections';
import type {
	AutonomousCustomElementMap,
	BeforeUnloadEvent,
	CustomizedBuiltInElementMap,
	DocumentAndElementEventHandlers,
	GlobalEventHandlers,
	HTMLAnchorElement,
	HTMLAreaElement,
	HTMLBodyElement,
	HTMLElement,
	HTMLElementMap,
	HTMLEmbedElement,
	HTMLFormElement,
	HTMLFrameSetElement,
	HTMLHeadElement,
	HTMLIFrameElement,
	HTMLImageElement,
	HTMLObjectElement,
	HTMLScriptElement,
	HTMLUnknownElement,
	Location,
	WindowProxy,
} from '../html';
import type { SVGElement, SVGElementMap, SVGScriptElement } from '../svg';
import type { Attr } from './attr';
import type { CDATASection } from './cdata-section';
import type { Comment } from './comment';
import type { CustomEvent } from './custom-event';
import type { DocumentFragment } from './document-fragment';
import type { DocumentType } from './document-type';
import type { DOMImplementation } from './dom-implementation';
import type { Element } from './element';
import type { Event } from './event';
import type { EventHandler } from './event-target';
import type { DocumentOrElement, DocumentOrShadowRoot, NonElementParentNode, ParentNode } from './mixins';
import type { Node } from './node';
import type { ProcessingInstruction } from './processing-instruction';
import type { Range } from './ranges';
import type { ShadowRoot } from './shadow-root';
import type { Text } from './text';
import type { NodeFilter, NodeIterator, TreeWalker } from './traversal';
import type { XPathEvaluatorBase } from './xpath';

// TODO: use correct event interfaces https://dom.spec.whatwg.org/#dom-document-createevent
/** @nonIdlType */
export interface CreateEventMap {
	beforeunloadevent: BeforeUnloadEvent;
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
	// skip touchevent, augment interface manually if required
	uievent: Event;
	uievents: Event;
}

/** @spec https://dom.spec.whatwg.org/#dictdef-elementcreationoptions */
export interface ElementCreationOptions<Is extends string = string> {
	is?: Is;
}

/** @spec https://html.spec.whatwg.org/multipage/dom.html#documentreadystate */
export type DocumentReadyState = 'loading' | 'interactive' | 'complete';

/** @spec https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgscriptelement */
export type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;

/**
 * @spec https://dom.spec.whatwg.org/#interface-document
 * @spec https://html.spec.whatwg.org/multipage/dom.html#the-document-object
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#Document-partial
 */
export interface Document extends Document.Interface<Document.Type.HTML> {}

/** @exposed Window */
export namespace Document {
	type CreateElement<Tag extends string, Is extends string> = ParentNode.ElementLookup<
		Is,
		CustomizedBuiltInElementMap,
		never
	> extends never ? ParentNode.ElementLookup<Tag, Merge<HTMLElementMap, AutonomousCustomElementMap>, HTMLUnknownElement>
		: ParentNode.ElementLookup<Is, CustomizedBuiltInElementMap>;

	export enum Type {
		HTML = 'html',
		XML = 'xml',
	}

	type NamedElements = HTMLEmbedElement | HTMLFormElement | HTMLIFrameElement | HTMLImageElement | HTMLObjectElement;

	export type NamedProperties = Document & Record<string, NamedElements | HTMLCollection<NamedElements> | WindowProxy>;

	export interface Prototype<T extends Type = Type.HTML>
		extends
			Node.Prototype,
			NonElementParentNode,
			DocumentOrShadowRoot,
			ParentNode,
			DocumentOrElement,
			XPathEvaluatorBase,
			GlobalEventHandlers,
			DocumentAndElementEventHandlers
	{
		readonly [Symbol.unscopables]: ParentNode.Unscopables;

		readonly nodeType: Node.NodeTypes['DOCUMENT_NODE'];
		readonly nodeName: '#document';
		readonly ownerDocument: null;
		readonly parentNode: null;
		readonly parentElement: null;
		readonly previousSibling: null;
		readonly nextSibling: null;

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
		readonly forms: HTMLCollection<HTMLFormElement.LegacyUnenumerableNamedProperties>;
		readonly scripts: HTMLCollection<HTMLScriptElement>;
		readonly currentScript: HTMLOrSVGScriptElement | null;

		readonly defaultView: WindowProxy | null;

		/** @deprecated legacy alias of .characterSet */
		readonly charset: string;
		/** @deprecated legacy alias of .characterSet */
		readonly inputEncoding: string;
		/** @deprecated */
		readonly anchors: HTMLCollection<HTMLAnchorElement>;
		/** @deprecated */
		readonly applets: HTMLCollection;
		/** @deprecated */
		readonly all: HTMLAllCollection;

		nodeValue: null;
		textContent: null;

		domain: string;
		cookie: string;

		title: string;
		dir: HTMLElement.Directionality;
		body: HTMLBodyElement | HTMLFrameSetElement | null;

		designMode: 'on' | 'off';

		onreadystatechange: EventHandler;

		/** @deprecated */
		fgColor: string;
		/** @deprecated */
		linkColor: string;
		/** @deprecated */
		vlinkColor: string;
		/** @deprecated */
		alinkColor: string;
		/** @deprecated */
		bgColor: string;

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
		): ParentNode.ElementLookup<Tag, SVGElementMap, SVGElement>;
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
		): ParentNode.ElementLookup<Tag, SVGElementMap, SVGElement>;
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

		open(url: string, name: string, features: string): WindowProxy | null;
		/** @deprecated */
		open(unused1: string, unused2?: string): NamedProperties;
		open(): NamedProperties;
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

		/** @deprecated */
		clear(): void;
		/** @deprecated */
		captureEvents(): void;
		/** @deprecated */
		releaseEvents(): void;
	}

	export type Interface<T extends Type> = Prototype<T> & {
		/** @putForwards href */
		readonly location: Location | null;
	};

	export interface Static<T extends Type = Type.HTML> extends Node.Static {
		prototype: Prototype<T>;
	}

	export interface Constructor extends Static {
		new(): Document;
	}
}

/** @spec https://dom.spec.whatwg.org/#xmldocument */
export interface XMLDocument extends XMLDocument.Interface {}

/** @exposed Window */
export namespace XMLDocument {
	export interface Prototype extends Document.Prototype<Document.Type.XML> {
		// not deprecated
		createCDATASection(data: string): CDATASection;
	}

	export type Interface =
		& Prototype
		& Document.Interface<Document.Type.XML>
		& {
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
		new(): never;
	}
}

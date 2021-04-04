import type { CSSNamespace, CSSStyleDeclaration, MediaQueryList, Screen, ScrollUtils } from '../../css';
import type { Document, Element, Event, EventTarget } from '../../dom';
import type { IndexedIterable } from '../../iterable';
import type {
	AnimationFrameProvider,
	DocumentAndWindowEventTypes,
	GlobalEventHandlers,
	GlobalEventTypes,
	WindowEventHandlers,
	WindowEventTypes,
	WindowLocalStorage,
	WindowOrWorkerGlobalScope,
	WindowSessionStorage,
} from '../mixins';
import type { OnErrorEventHandler, PostMessageOptions, Transferable } from '../types';
import type { BarProp } from './bar-prop';
import type { CustomElementRegistry } from './custom-element-registry';
import type { History } from './history';
import type { Location } from './location';
import type { Navigator } from './navigator';
import type { External } from './obsolete';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/window-object.html#windowpostmessageoptions
 */
export interface WindowPostMessageOptions extends PostMessageOptions {
	targetOrigin?: string;
}

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object
 */
export type WindowProxy = Window;

/**
 * @spec https://dom.spec.whatwg.org/#interface-window-extensions
 * @spec https://html.spec.whatwg.org/multipage/window-object.html#the-window-object
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#Window-partial
 * @spec https://drafts.csswg.org/cssom/#extensions-to-the-window-interface
 * @spec https://drafts.csswg.org/cssom-view-1/#extensions-to-the-window-interface
 */
export interface Window extends Window.Interface {}

/**
 * @exposed Window
 * @global Window
 */
export namespace Window {
	export interface Prototype
		extends
			EventTarget.Prototype<GlobalEventTypes & WindowEventTypes & DocumentAndWindowEventTypes>,
			IndexedIterable<WindowProxy>,
			GlobalEventHandlers,
			WindowEventHandlers,
			WindowOrWorkerGlobalScope,
			AnimationFrameProvider,
			WindowSessionStorage,
			WindowLocalStorage,
			CSSNamespace,
			ScrollUtils
	{
		/** @globalThis */
		readonly self: WindowProxy;
		readonly history: History;
		readonly customElements: CustomElementRegistry;
		readonly locationbar: BarProp;
		readonly menubar: BarProp;
		readonly personalbar: BarProp;
		readonly scrollbars: BarProp;
		readonly statusbar: BarProp;
		readonly toolbar: BarProp;
		readonly closed: boolean;

		readonly frames: WindowProxy;
		readonly length: number;
		readonly parent: WindowProxy | null;
		readonly frameElement: Element | null;

		readonly navigator: Navigator;
		readonly originAgentCluster: boolean;

		readonly screen: Screen;
		readonly innerWidth: number;
		readonly innerHeight: number;
		readonly scrollX: number;
		readonly pageXOffset: number;
		readonly scrollY: number;
		readonly pageYOffset: number;
		readonly screenX: number;
		readonly screenLeft: number;
		readonly screenY: number;
		readonly screenTop: number;
		readonly outerWidth: number;
		readonly outerHeight: number;
		readonly devicePixelRatio: number;

		/** @deprecated */
		readonly event?: Event;
		/** @deprecated */
		readonly external: External;

		name: string;
		status: string;

		opener: unknown;

		onerror: OnErrorEventHandler;

		close(): void;
		stop(): void;
		focus(): void;
		blur(): void;

		open(url?: string, target?: string, features?: string | null): WindowProxy | null;

		alert(message?: string): void;
		confirm(message?: string): boolean;
		prompt(message?: string, defaultValue?: string): string | null;

		postMessage(message: unknown, targetOrigin: string, transfer?: Transferable[]): void;
		postMessage(message: unknown, options?: WindowPostMessageOptions): void;

		getComputedStyle(element: Element, pseudoElement?: string): CSSStyleDeclaration;

		matchMedia(query: string): MediaQueryList;

		moveTo(x: number, y: number): void;
		moveBy(x: number, y: number): void;
		resizeTo(width: number, height: number): void;
		resizeBy(x: number, y: number): void;

		/** @deprecated */
		captureEvents(): void;
		/** @deprecated */
		releaseEvents(): void;
	}

	export interface LegacyUnforgeable {
		/** @globalThis */
		readonly window: WindowProxy;
		readonly document: Document;
		/** @putForwards href */
		readonly location: Location;
		readonly top: WindowProxy | null;
	}

	export type Interface = Prototype & LegacyUnforgeable & EventTarget.Interface;

	export interface Static extends EventTarget.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

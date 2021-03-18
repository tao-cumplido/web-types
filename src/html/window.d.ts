import type { Document, Element, Event, EventTarget } from '../dom';
import type { IndexedIterable } from '../iterable';
import type { BarProp } from './bar-prop';
import type { CustomElementRegistry } from './custom-element-registry';
import type { History } from './history';
import type { Location } from './location';
import type { PostMessageOptions } from './message-port';
import type { GlobalEventHandlers, WindowEventHandlers, WindowOrWorkerGlobalScope } from './mixins';
import type { Navigator } from './navigator';
import type { Transferable } from './types';

/** @spec https://html.spec.whatwg.org/multipage/window-object.html#windowpostmessageoptions */
export interface WindowPostMessageOptions extends PostMessageOptions {
	targetOrigin?: string;
}

/** @spec https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object */
export type WindowProxy = Window;

/**
 * @spec https://dom.spec.whatwg.org/#interface-window-extensions
 * @spec https://html.spec.whatwg.org/multipage/window-object.html#the-window-object
 */
export interface Window extends Window.Interface {}

/**
 * @exposed Window
 * @global Window
 */
export namespace Window {
	export interface Prototype
		extends
			EventTarget.Prototype<Window>,
			IndexedIterable<WindowProxy>,
			GlobalEventHandlers,
			WindowEventHandlers,
			WindowOrWorkerGlobalScope
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

		/** @deprecated */
		readonly event?: Event;

		name: string;
		status: string;

		opener: unknown;

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
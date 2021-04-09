// eslint-disable-next-line spaced-comment
/// <reference types="node" />

import type { Context } from 'vm';
import { EventEmitter } from 'events';

import type * as web from '@tswt/core';
import type { ElementLocation } from 'parse5';
import * as ToughCookie from 'tough-cookie';

import type { Window } from './window';

export type { Window } from './window';

export type BinaryData = ArrayBufferLike | NodeJS.ArrayBufferView;

export interface AbortablePromise<T> extends Promise<T> {
	abort(): void;
}

export interface BaseOptions {
	referrer?: string;
	userAgent?: string;
	includeNodeLocations?: boolean;
	runScripts?: 'dangerously' | 'outside-only';
	resources?: 'usable' | ResourceLoader;
	virtualConsole?: VirtualConsole;
	cookieJar?: CookieJar;
	pretendToBeVisual?: boolean;
	// eslint-disable-next-line @typescript-eslint/method-signature-style
	beforeParse?: (window: Window) => void;
}

export interface FileOptions extends BaseOptions {
	url?: string;
	contentType?: string;
}

export interface ConstructorOptions extends FileOptions {
	storageQuota?: number;
}

export interface VirtualConsoleSendToOptions {
	omitJSDOMErrors?: boolean;
}

export interface ReconfigureSettings {
	windowTop?: Window;
	url?: string;
}

export interface FetchOptions {
	cookieJar?: CookieJar;
	referrer?: string;
	accept?: string;
	element?: web.HTMLScriptElement | web.HTMLLinkElement | web.HTMLIFrameElement | web.HTMLImageElement;
}

export interface ResourceLoaderConstructorOptions {
	strictSSL?: boolean;
	proxy?: string;
	userAgent?: string;
}

export const tough: typeof ToughCookie;

export class CookieJar extends ToughCookie.CookieJar {}

export class ResourceLoader {
	constructor(options?: ResourceLoaderConstructorOptions);
	fetch(url: string, options: FetchOptions): AbortablePromise<Buffer> | null;
}

export class VirtualConsole extends EventEmitter {
	on<K extends keyof Console>(method: K, callback: Console[K]): this;
	on(event: 'jsdomError', callback: (error: Error) => void): this;
	sendTo(console: Console, options?: VirtualConsoleSendToOptions): this;
}

export class JSDOM {
	static fromURL(url: string, options?: BaseOptions): Promise<JSDOM>;
	static fromFile(url: string, options?: FileOptions): Promise<JSDOM>;
	static fragment(html: string): web.DocumentFragment;

	readonly window: Window;
	readonly virtualConsole: VirtualConsole;
	readonly cookieJar: CookieJar;

	constructor(html?: string | Buffer | BinaryData, options?: ConstructorOptions);

	serialize(): string;
	nodeLocation(node: web.Node): ElementLocation | null;
	getInternalVMContext(): Context;
	reconfigure(settings: ReconfigureSettings): void;
}

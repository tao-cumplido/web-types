import type { AbortSignal } from '../abort';
import type { Headers, HeadersInit } from './headers';
import type { Body } from './mixins';
import type {
	BodyInit,
	ReferrerPolicy,
	RequestCache,
	RequestCredentials,
	RequestDestination,
	RequestMode,
	RequestRedirect,
} from './types';

/**
 * @idlType
 * @spec https://fetch.spec.whatwg.org/#requestinfo
 */
export type RequestInfo = Request | string;

/**
 * @idlType
 * @spec https://fetch.spec.whatwg.org/#requestinit
 */
export interface RequestInit {
	method?: string;
	headers?: HeadersInit;
	body?: BodyInit | null;
	referrer?: string;
	referrerPolicy?: ReferrerPolicy;
	mode?: RequestMode;
	credentials?: RequestCredentials;
	cache?: RequestCache;
	redirect?: RequestRedirect;
	integrity?: string;
	keepalive?: boolean;
	signal?: AbortSignal | null;
	window?: null;
}

/** @spec https://fetch.spec.whatwg.org/#request-class */
export interface Request extends Request.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace Request {
	export interface Prototype extends Body {
		readonly method: string;
		readonly url: string;
		readonly headers: Headers;

		readonly destination: RequestDestination;
		readonly referrer: string;
		readonly referrerPolicy: ReferrerPolicy;
		readonly mode: RequestMode;
		readonly credentials: RequestCredentials;
		readonly cache: RequestCache;
		readonly redirect: RequestRedirect;
		readonly integrity: string;
		readonly keepalive: boolean;
		readonly isReloadNavigation: boolean;
		readonly isHistoryNavigation: boolean;
		readonly signal: AbortSignal;

		clone(): Request;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(input: RequestInfo): Request;
	}
}

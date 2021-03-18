import type { Headers, HeadersInit } from './headers';
import type { Body } from './mixins';
import type { BodyInit, ResponseType } from './types';

/** @spec https://fetch.spec.whatwg.org/#responseinit */
export interface ResponseInit {
	status?: number;
	statusText?: string;
	headers?: HeadersInit;
}

/** @spec https://fetch.spec.whatwg.org/#response-class */
export interface Response extends Response.Interface {}

/** @exposed Window */
export namespace Response {
	export interface Prototype extends Body {
		readonly type: ResponseType;

		readonly url: string;
		readonly redirected: boolean;
		readonly status: number;
		readonly ok: boolean;
		readonly statusText: string;
		readonly headers: Headers;

		clone(): Response;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
		error(): Response;
		redirect(url: string, status?: number): Response;
	}

	export interface Constructor extends Static {
		new(body?: BodyInit, init?: ResponseInit): Response;
	}
}

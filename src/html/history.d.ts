import type { Serializable } from './types';

/** @spec https://html.spec.whatwg.org/multipage/history.html#scrollrestoration */
export type ScrollRestoration = 'auto' | 'manual';

/** @spec https://html.spec.whatwg.org/multipage/history.html#the-history-interface */
export interface History extends History.Interface {}

/** @exposed Window */
export namespace History {
	export interface Prototype {
		readonly length: number;
		readonly state: Serializable;

		scrollRestoration: ScrollRestoration;

		go(delta?: number): void;
		back(): void;
		forward(): void;
		pushState(data: Serializable, unused: '', url?: string | null): void;
		replaceState(data: Serializable, unused: '', url?: string | null): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

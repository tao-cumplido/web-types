import type { Event, EventInit } from './event';

/** @spec https://dom.spec.whatwg.org/#dictdef-customeventinit */
export interface CustomEventInit<Detail = unknown> extends EventInit {
	detail?: Detail;
}

/** @spec https://dom.spec.whatwg.org/#interface-customevent */
export interface CustomEvent<Detail = unknown> extends CustomEvent.Interface<Detail> {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CustomEvent {
	export interface Prototype<Detail = unknown> extends Event.Prototype {
		readonly detail: Detail;

		/** @deprecated */
		initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: Detail): void;
	}

	export type Interface<Detail = unknown> = Prototype<Detail> & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new <Detail = unknown>(type: string, eventInitDict?: CustomEventInit<Detail>): CustomEvent<Detail>;
	}
}

import type { Event } from './event';

// prettier-ignore
export interface CustomEvent<
	Detail = unknown,
> extends
CustomEvent.Interface<Detail> {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace CustomEvent {
	export interface Init<Detail> extends Event.Init {
		detail?: Detail;
	}

	export interface Prototype<
		// prettier-ignore
		Detail = unknown
	> extends Event.Prototype {
		readonly detail: Detail;

		/** @deprecated */
		initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: Detail): void;
	}

	export type Interface<Detail = unknown> = Prototype<Detail> & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new <Detail = unknown>(type: string, eventInitDict?: Init<Detail>): CustomEvent<Detail>;
	}
}

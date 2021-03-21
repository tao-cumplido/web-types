import type {
	NavigatorConcurrentHardware,
	NavigatorContentUtils,
	NavigatorCookies,
	NavigatorID,
	NavigatorLanguage,
	NavigatorOnLine,
	NavigatorPlugins,
} from '../mixins';

/** @spec https://html.spec.whatwg.org/multipage/system-state.html#the-navigator-object */
export interface Navigator extends Navigator.Interface {}

/** @exposed Window */
export namespace Navigator {
	export interface Prototype
		extends
			NavigatorID,
			NavigatorID.Window,
			NavigatorLanguage,
			NavigatorOnLine,
			NavigatorContentUtils,
			NavigatorCookies,
			NavigatorPlugins,
			NavigatorConcurrentHardware
	{}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#dom-plugin
 */
export interface Plugin extends Plugin.Interface {}

/** @exposed Window */
export namespace Plugin {
	export interface Prototype {
		readonly name: undefined;
		readonly description: undefined;
		readonly filename: undefined;
		readonly length: undefined;
		item(index: number): void;
		namedItem(name: string): void;
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

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#pluginarray
 */
export interface PluginArray extends PluginArray.Interface {}

/** @exposed Window */
export namespace PluginArray {
	export interface Prototype {
		readonly length: 0;
		refresh(): void;
		item(index: number): null;
		namedItem(name: string): null;
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

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#mimetype
 */
export interface MimeType extends MimeType.Interface {}

/** @exposed Window */
export namespace MimeType {
	export interface Prototype {
		readonly type: undefined;
		readonly description: undefined;
		readonly suffixes: undefined;
		readonly enabledPlugin: undefined;
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

/**
 * @deprecated
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#mimetypearray
 */
export interface MimeTypeArray extends MimeTypeArray.Interface {}

/** @exposed Window */
export namespace MimeTypeArray {
	export interface Prototype {
		readonly length: 0;
		item(index: number): null;
		namedItem(name: string): null;
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

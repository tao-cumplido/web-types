import type { Node } from '../dom';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/custom-elements.html#customelementconstructor */
export type CustomElementConstructor =
	/** @abstract */
	new () => HTMLElement;

/** @spec https://html.spec.whatwg.org/multipage/custom-elements.html#elementdefinitionoptions */
export interface ElementDefinitionOptions {
	extends?: string;
}

/** @spec https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-api */
export interface CustomElementRegistry extends CustomElementRegistry.Interface {}

/** @exposed Window */
export namespace CustomElementRegistry {
	export interface Prototype {
		define(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void;
		get(name: string): CustomElementConstructor | undefined;
		whenDefined(name: string): Promise<CustomElementConstructor>;
		upgrade(root: Node): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}

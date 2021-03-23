import type { IndexedIterable } from '../../iterable';
import type { CSSRule } from './css-rule';

/** @spec https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface */
export interface CSSStyleDeclaration extends CSSStyleDeclaration.Interface {}

/** @exposed Window */
export namespace CSSStyleDeclaration {
	export interface Prototype extends IndexedIterable<string> {
		readonly length: number;
		readonly parentRule: CSSRule | null;
		cssText: string;
		cssFloat: string;
		item(index: number): string;
		getPropertyValue(property: string): string;
		getPropertyPriority(property: string): string;
		setProperty(property: string, value?: string, priority?: string): void;
		removeProperty(property: string): string;
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

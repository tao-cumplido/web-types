import type { Element, ElementConstructor } from '../nodes/element';

export interface HTMLElement extends Element {
	foo: string;
	bar: number;
}

export interface HTMLElementConstructor extends ElementConstructor {
	prototype: HTMLElement;
	/** @abstract */
	new (): HTMLElement;
}

export interface HTMLUnknownElement extends HTMLElement {}

export interface HTMLUnknownElementConstructor extends HTMLElementConstructor {
	prototype: HTMLUnknownElement;
	/** @abstract */
	new (): never;
}

import type { Element, ElementConstructor } from '../element';

export interface HTMLElement extends Element {}

export interface HTMLElementConstructor extends ElementConstructor {
	prototype: HTMLElement;
	/** @abstract */
	new (): HTMLElement;
}

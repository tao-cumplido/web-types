import type { HTMLElement, HTMLElementConstructor } from './html-element';

export interface HTMLSlotElement extends HTMLElement {}

export interface HTMLSlotElementConstructor extends HTMLElementConstructor {
	prototype: HTMLSlotElement;
	/** @abstract */
	new (): HTMLSlotElement;
}

import type { HTMLElement, HTMLElementConstructor } from './html-element';

export interface HTMLHtmlElement extends HTMLElement {}

export interface HTMLHtmlElementConstructor extends HTMLElementConstructor {
	prototype: HTMLHtmlElement;
	/** @abstract */
	new (): HTMLHtmlElement;
}

/* eslint-disable @typescript-eslint/consistent-type-imports, @typescript-eslint/no-empty-interface */

export { HTMLElement, HTMLElementConstructor, HTMLUnknownElement, HTMLUnknownElementConstructor } from './html-element';
export { HTMLHtmlElement, HTMLHtmlElementConstructor } from './html-html-element';
export { HTMLSlotElement, HTMLSlotElementConstructor } from './html-slot-element';

export interface HTMLElementMap {
	html: import('./html-html-element').HTMLHtmlElement;
	slot: import('./html-slot-element').HTMLSlotElement;
}

export interface AutonomousCustomElementMap {}

export interface CustomizedBuiltInElementMap {}

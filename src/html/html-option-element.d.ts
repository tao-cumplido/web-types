import type { HTMLElement } from './html-element';

export interface HTMLOptionElement extends HTMLOptionElement.Interface {}

export namespace HTMLOptionElement {
	export interface Prototype extends HTMLElement.Prototype {}

	export type Interface = Prototype & HTMLElement.Interface;
}

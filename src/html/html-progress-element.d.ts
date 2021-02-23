import type { NodeList } from '../collections';
import type { HTMLElement } from './html-element';
import type { HTMLLabelElement } from './html-label-element';

export interface HTMLProgressElement extends HTMLProgressElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLProgressElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly position: number;
		readonly labels: NodeList<HTMLLabelElement>;
		value: number;
		max: number;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLProgressElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		progress: HTMLProgressElement;
	}
}

import type { Element, Node } from '../dom';
import type { HTMLElement } from './html-element';

export interface HTMLSlotElement extends HTMLSlotElement.Interface {}

export namespace HTMLSlotElement {
	export interface AssignedNodesOptions {
		flatten?: boolean;
	}

	export interface Prototype extends HTMLElement.Prototype {
		name: string;
		assignedNodes(options?: AssignedNodesOptions): Node[];
		assignedElements(options?: AssignedNodesOptions): Element[];
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLSlotElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		slot: HTMLSlotElement;
	}
}

import type { Element, Node } from '../../dom';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/scripting.html#assignednodesoptions */
export interface AssignedNodesOptions {
	flatten?: boolean;
}

/** @spec https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element */
export interface HTMLSlotElement extends HTMLSlotElement.Interface {}

/** @exposed Window */
export namespace HTMLSlotElement {
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
		new(): HTMLSlotElement;
	}
}

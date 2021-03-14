import type { DocumentFragment } from '../../dom';
import type { HTMLElement } from './html-element';

/** @spec https://html.spec.whatwg.org/multipage/scripting.html#the-template-element */
export interface HTMLTemplateElement extends HTMLTemplateElement.Interface {}

/** @exposed Window */
export namespace HTMLTemplateElement {
	export interface Prototype extends HTMLElement.Prototype {
		readonly content: DocumentFragment;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLTemplateElement;
	}
}

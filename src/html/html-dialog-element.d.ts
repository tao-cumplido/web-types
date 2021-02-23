import type { HTMLElement } from './html-element';

export interface HTMLDialogElement extends HTMLDialogElement.Interface {}

/**
 * @exposed Window
 */
export namespace HTMLDialogElement {
	export interface Prototype extends HTMLElement.Prototype {
		open: boolean;
		returnValue: string;
		show(): void;
		showModal(): void;
		close(returnValue?: string): void;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): HTMLDialogElement;
	}
}

declare module '@tswt/core' {
	interface HTMLElementMap {
		dialog: HTMLDialogElement;
	}
}

import type { DOMStringMap } from '../collections';

export interface HTMLOrSVGElement {
	readonly dataset: DOMStringMap;
	nonce: string;

	autofocus: boolean;
	tabIndex: number;

	focus(options?: HTMLOrSVGElement.FocusOptions): void;
	blur(): void;
}

export namespace HTMLOrSVGElement {
	export interface FocusOptions {
		preventScroll?: boolean;
	}
}

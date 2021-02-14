import type { DOMStringMap } from '../html/common';

export interface FocusOptions {
	preventScroll?: boolean;
}

export interface HTMLOrSVGElement {
	readonly dataset: DOMStringMap;
	nonce: string;

	autofocus: boolean;
	tabIndex: number;

	focus(options?: FocusOptions): void;
	blur(): void;
}

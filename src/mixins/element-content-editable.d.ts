export interface ElementContentEditable {
	readonly isContentEditable: boolean;
	contentEditable: '' | `${boolean}` | 'inherit';
	enterKeyHint: '' | 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
	inputMode: '' | 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}
